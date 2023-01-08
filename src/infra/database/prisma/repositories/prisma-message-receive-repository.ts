import { MessageReceive } from '@application/entidades/nessages-receive/message-receive';
import { DatabaseMessageReceiveRepository } from '@application/repositories/database-message-receive-repository';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PrismaMessageReceiveRepository
  implements DatabaseMessageReceiveRepository
{
  constructor(private prisma: PrismaService) {}
  create(messageReceive: MessageReceive): Promise<void> {
    throw new Error(`Method create ${messageReceive} not implemented.`);
  }
  save(messageSend: MessageReceive): Promise<void> {
    throw new Error(`Method save ${messageSend} not implemented.`);
  }
  findById(id: string): Promise<MessageReceive> {
    throw new Error(`Method findById: ${id} not implemented.`);
  }
}
