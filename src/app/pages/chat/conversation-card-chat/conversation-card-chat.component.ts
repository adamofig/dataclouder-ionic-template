import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  DCChatComponent,
  ConversationPromptSettings,
  ConversationUserSettings,
  ChatRole,
  AudioSpeed,
  IConversationCard,
} from '@dataclouder/conversation-system';
import { ActivatedRoute } from '@angular/router';
import { ConversationAIService } from 'src/app/services/chat-ai-service';

@Component({
  selector: 'app-conversation-card-chat',
  standalone: true,
  imports: [CommonModule, DCChatComponent],
  templateUrl: './conversation-card-chat.component.html',
  styleUrls: ['./conversation-card-chat.component.scss'],
})
export class ConversationCardChatComponent implements OnInit {
  @Input() conversationCard!: IConversationCard;
  public ConversationPromptSettings: ConversationPromptSettings = {
    messages: [{ text: 'you are having a conversation with?', content: 'bot', role: ChatRole.System }],
  };

  public conversationUserSettings: ConversationUserSettings = {
    realTime: false,
    repeatRecording: false,
    fixGrammar: false,
    superHearing: false,
    voice: 'en-US',
    autoTranslate: false,
    synthVoice: false,
    highlightWords: false,
    speedRate: 1,
    modelName: '',
    provider: '',
    speed: AudioSpeed.Regular,
  };

  constructor(private route: ActivatedRoute, private conversationAIService: ConversationAIService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(async params => {
      // TODO fix this, card can be passed as param (WIP), or fetched from the service
      this.conversationCard = JSON.parse(params.get('conversationCard')!);
      if (!this.conversationCard) {
        const id = params.get('id') as string;
        const card = await this.conversationAIService.findConversationCard(id);
        console.log('card', card);
        this.conversationCard = card;
        this.cdr.detectChanges();
      }
    });
  }
  // Add your component logic here
}
