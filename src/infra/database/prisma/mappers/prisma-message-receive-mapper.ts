import { MessageReceive } from '@application/entidades/nessages-receive/message-receive';
import { MessageReceive as RawMessageReceive } from '@prisma/client';

export class PrismaMessageReceiveMapper {
  static toPrisma(messageReceive: MessageReceive) {
    return {
      id: messageReceive.id,
      mqId: messageReceive.mqId,
      msgId: messageReceive.msgId,
      nuOp: messageReceive.nuOp,
      codMsg: messageReceive.codMsg,
      ispbEmissor: messageReceive.ispbEmissor,
      ispbDestino: messageReceive.ispbDestino,
      dataRecebimento: messageReceive.dataRecebimento,
      horaRecebimento: messageReceive.horaRecebimento,
      msgXml: messageReceive.msgXml,
      statusMsg: messageReceive.statusMsg,
      receivedAt: messageReceive.receivedAt,
      createdAt: messageReceive.createdAt,
    };
  }
  static toDomain(raw: RawMessageReceive): MessageReceive {
    return new MessageReceive({
      mqId: raw.mqId,
      msgId: raw.msgId,
      nuOp: raw.nuOp,
      codMsg: raw.codMsg,
      ispbEmissor: raw.ispbEmissor,
      ispbDestino: raw.ispbDestino,
      dataRecebimento: raw.dataRecebimento,
      horaRecebimento: raw.horaRecebimento,
      msgXml: raw.msgXml,
      statusMsg: raw.statusMsg,
      receivedAt: raw.receivedAt,
      createdAt: raw.createdAt,
    });
  }
}
