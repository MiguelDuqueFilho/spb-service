import { MessageSend } from '@application/entidades/messages-send/message-send';
import { MessageSend as RawMessageSend } from '@prisma/client';

export class PrismaMessageSendMapper {
  static toPrisma(messageSend: MessageSend) {
    return {
      id: messageSend.id,
      originId: messageSend.originId,
      msgId: messageSend.msgId,
      nuOp: messageSend.nuOp,
      codMsg: messageSend.codMsg,
      ispbEmissor: messageSend.ispbEmissor,
      ispbDestino: messageSend.ispbDestino,
      prioridade: messageSend.prioridade,
      tipoAgendamento: messageSend.tipoAgendamento,
      dataAgendamento: messageSend.dataAgendamento,
      horaAgendamento: messageSend.horaAgendamento,
      msgXml: messageSend.msgXml,
      statusMsg: messageSend.statusMsg,
      sentAt: messageSend.sentAt,
      canceledAt: messageSend.canceledAt,
      createdAt: messageSend.createdAt,
    };
  }

  static toDomain(raw: RawMessageSend): MessageSend {
    return new MessageSend({
      originId: raw.id,
      msgId: raw.msgId,
      nuOp: raw.nuOp,
      codMsg: raw.codMsg,
      ispbEmissor: raw.ispbEmissor,
      ispbDestino: raw.ispbDestino,
      prioridade: raw.prioridade,
      tipoAgendamento: raw.tipoAgendamento,
      dataAgendamento: raw.dataAgendamento,
      horaAgendamento: raw.horaAgendamento,
      msgXml: raw.msgXml,
      statusMsg: raw.statusMsg,
      sentAt: raw.sentAt,
      canceledAt: raw.canceledAt,
      createdAt: raw.createdAt,
    });
  }
}
