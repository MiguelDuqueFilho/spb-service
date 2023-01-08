import { Module } from '@nestjs/common';
import { KafkaConsumerService } from './kafka/kafka-consumer.service';

import { MessagingController } from './kafka/controllers/messaging.controller';
import { DatabaseModule } from '../database/database.module';
import { MessagingMessageSendRepository } from '@application/repositories/messaging-message-send-repository';
import { KafkaMessageSendToPilotRepository } from './kafka/repositories/kafka-message-send-to-pilot.repository';
import { ProcessSendToSPB } from '@application/use-cases/process-message-to-spb';

@Module({
  imports: [DatabaseModule],
  controllers: [MessagingController],
  providers: [
    KafkaConsumerService,
    ProcessSendToSPB,
    {
      provide: MessagingMessageSendRepository,
      useClass: KafkaMessageSendToPilotRepository,
    },
  ],
  exports: [MessagingMessageSendRepository],
})
export class MessagingModule {}
