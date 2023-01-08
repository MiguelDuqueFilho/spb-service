import { DatabaseMessageSendRepository } from '@application/repositories/database-message-send-repository';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { MessageSend } from '@application/entidades/messages-send/message-send';

@Injectable()
export class PrismaMessageSendRepository
  implements DatabaseMessageSendRepository
{
  constructor(private prisma: PrismaService) {}

  async create(messageSend: MessageSend): Promise<void> {
    // const raw = PrismaMessageSendMapper.toPrisma(messageSend);

    await this.prisma.messageSend.create({
      data: {
        id: messageSend.id,
        originId: messageSend.originId,
        msgId: 1,
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
      },
    });
  }
}
