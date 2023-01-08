import { MessageSend } from '@application/entidades/messages-send/message-send';

import { MessagingMessageSendRepository } from '@application/repositories/messaging-message-send-repository';
import { xmlGetValue } from '@helpers/xml.util';
import { Injectable } from '@nestjs/common';

interface SendMessageRequest {
  id: string;
  codMsg: string;
  msgXml: string;
}

@Injectable()
export class ProcessPilotoTest {
  constructor(
    private messagingMessageSendRepository: MessagingMessageSendRepository,
  ) {}

  async execute(request: SendMessageRequest): Promise<void> {
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
    console.log(message);
    await this.messagingMessageSendRepository.publishToPilot(message);
  }
}
