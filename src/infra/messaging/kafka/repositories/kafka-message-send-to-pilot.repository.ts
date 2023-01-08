import { MessagingMessageSendRepository } from '@application/repositories/messaging-message-send-repository';
import { Injectable, Logger } from '@nestjs/common';

import { MessageSend } from '@application/entidades/messages-send/message-send';

import { KafkaConsumerService } from '../kafka-consumer.service';
import { Message } from 'kafkajs';
import { randomUUID } from 'node:crypto';

@Injectable()
export class KafkaMessageSendToPilotRepository
  implements MessagingMessageSendRepository
{
  private readonly logger = new Logger(KafkaMessageSendToPilotRepository.name);
  constructor(private kafka: KafkaConsumerService) {}

  async publishToPilot(messageSend: MessageSend) {
    this.logger.log(`publishToPilot - messageSend`);
    this.logger.log(messageSend);

    const topic = 'message_pilot';
    const message: Message[] = [
      {
        key: randomUUID(),
        value: JSON.stringify(messageSend),
      },
    ];

    await this.kafka.publish(topic, message);
  }
}
