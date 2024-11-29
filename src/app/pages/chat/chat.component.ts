import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonFooter,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonIcon,
  IonList,
  IonAvatar,
  IonText,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { sendOutline, sendSharp, send } from 'ionicons/icons';
import { ChatComponent, ConversationUserSettings, ConversationChatSettings, ChatRole } from '@dataclouder/conversation-system';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonFooter,
    IonItem,
    IonLabel,
    IonInput,
    IonButton,
    IonIcon,
    IonList,
    IonAvatar,
    IonText,
    ChatComponent,
  ],
})
export class ChatComponentPage implements OnInit {
  public conversationUserSettings: ConversationUserSettings = {
    realTime: false,
    repeatRecording: false,
    fixGrammar: false,
    superHearing: false,
    voice: 'default',
    autoTranslate: false,
    highlightWords: false,
    synthVoice: false,
    modelName: '',
    provider: '',
    speed: '',
    speedRate: 1,
  };

  public conversationChatSettings: ConversationChatSettings = {
    messages: [
      { role: ChatRole.System, content: 'you are a helpful assistant talking about fruits, vegetables and similar' },
      {
        role: ChatRole.Assistant,
        content: 'hello! How can I assist you today, do you want to know about fruits?',
      },
    ],
  };

  messages: any[] = [];
  newMessage: string = '';

  constructor() {
    addIcons({ send, sendOutline, sendSharp });
  }

  ngOnInit() {
    // Initialize with some dummy messages
  }
}
