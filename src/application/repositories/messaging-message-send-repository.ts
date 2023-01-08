import { MessageSend } from '@application/entidades/messages-send/message-send';

export abstract class MessagingMessageSendRepository {
  abstract publishToPilot(messageSend: MessageSend);
}
