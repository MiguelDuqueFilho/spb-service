import { MessageReceive } from '@application/entidades/nessages-receive/message-receive';

export abstract class DatabaseMessageReceiveRepository {
  abstract create(messageReceive: MessageReceive): Promise<void>;
  // abstract save(messageReceive: MessageReceive): Promise<void>;
  // abstract findById(id: string): Promise<MessageReceive>;
}
