import { MessageSend } from '@application/entidades/messages-send/message-send';
import { DatabaseMessageSendRepository } from '@application/repositories/database-message-send-repository';
import { MessagingMessageSendRepository } from '@application/repositories/messaging-message-send-repository';
import { xmlGetValue } from '@helpers/xml.util';
import { Injectable, Logger } from '@nestjs/common';

interface SendMessageRequest {
  id: string;
  codMsg: string;
  msgXml: string;
}

@Injectable()
export class ProcessSendToSPB {
  private readonly logger = new Logger(ProcessSendToSPB.name);
  constructor(
    private databaseMessageSendRepository: DatabaseMessageSendRepository,
    private messagingMessageSendRepository: MessagingMessageSendRepository,
  ) {}

  async execute(request: SendMessageRequest): Promise<void> {
    this.logger.debug(`SendMessageRequest - request`);
    this.logger.debug(request);

    const { id, codMsg, msgXml } = request;

    const nuOp = xmlGetValue(msgXml, 'NUOp');
    const ispbEmissor = xmlGetValue(msgXml, 'IdentdEmissor');
    const ispbDestino = xmlGetValue(msgXml, 'IdentdDestinatario');

    const message = new MessageSend({
      originId: id,
      nuOp,
      codMsg,
      ispbEmissor,
      ispbDestino,
      msgXml,
      createdAt: new Date(),
    });

    //* soap send message

    //* gravar db

    message.setMsgId(1);

    this.logger.debug(`databaseMessageSendRepository - message`);
    this.logger.debug(message);

    const responseDb = await this.databaseMessageSendRepository.create(message);

    this.logger.debug(`messagingMessageSendRepository - responseDb`);
    this.logger.debug(responseDb);

    //* send to pilot

    this.logger.debug(`messagingMessageSendRepository - message`);
    this.logger.debug(message);

    await this.messagingMessageSendRepository.publishToPilot(message);
  }
}
