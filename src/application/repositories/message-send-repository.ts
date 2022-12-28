import { MessageSend } from '@application/entidades/messages-send/message-send';

export abstract class MessageSendRepository {
  abstract create(messageSend: MessageSend): Promise<void>;
  // abstract save(messageSend: MessageSend): Promise<void>;
  // abstract findById(id: string): Promise<MessageSend>;
}
