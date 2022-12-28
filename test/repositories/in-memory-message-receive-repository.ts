import { MessageReceive } from '@application/entidades/nessages-receive/message-receive';
import { MessageReceiveRepository } from '@application/repositories/message-receive-repository';

export class InMemoryMessageReceiveRepository
  implements MessageReceiveRepository
{
  public messagesReceive: MessageReceive[] = [];

  async create(messageReceive: MessageReceive): Promise<void> {
    this.messagesReceive.push(messageReceive);
  }
}
