import { Module } from '@nestjs/common';
import { DatabaseMessageReceiveRepository } from '@application/repositories/database-message-receive-repository';
import { DatabaseMessageSendRepository } from '@application/repositories/database-message-send-repository';
import { PrismaService } from './prisma/prisma.service';
import { PrismaMessageReceiveRepository } from './prisma/repositories/prisma-message-receive-repository';
import { PrismaMessageSendRepository } from './prisma/repositories/prisma-message-send-repository';

@Module({
  providers: [
    PrismaService,
    {
      provide: DatabaseMessageSendRepository,
      useClass: PrismaMessageSendRepository,
    },
    {
      provide: DatabaseMessageReceiveRepository,
      useClass: PrismaMessageReceiveRepository,
    },
  ],
  exports: [DatabaseMessageSendRepository, DatabaseMessageReceiveRepository],
})
export class DatabaseModule {}
