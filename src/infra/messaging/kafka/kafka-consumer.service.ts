import { Inject, Injectable, OnModuleDestroy } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ServerKafka } from '@nestjs/microservices';
import { Message, Partitioners } from 'kafkajs';

@Injectable()
export class KafkaConsumerService
  extends ServerKafka
  implements OnModuleDestroy
{
  async onModuleDestroy() {
    await this.close();
  }

  constructor(
    @Inject(ConfigService) private readonly configService: ConfigService,
  ) {
    super({
      client: {
        clientId: 'consumer-service',
        brokers: [configService.get<string>('KAFKA_BROKER') || ''],
        sasl: {
          mechanism: 'scram-sha-256',
          username: configService.get<string>('KAFKA_USERNAME') || 'username',
          password: configService.get<string>('KAFKA_PASSWORD') || 'password',
        },
        ssl: true,
      },
      consumer: {
        groupId: 'service',
      },
      producer: {
        createPartitioner: Partitioners.DefaultPartitioner,
        allowAutoTopicCreation: false,
        transactionTimeout: 30000,
      },
    });
  }

  public async publish(topic: string, messages: Message[]) {
    await this.producer.send({
      topic,
      messages,
    });
  }
}
