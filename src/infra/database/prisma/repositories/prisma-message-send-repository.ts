import { DatabaseMessageSendRepository } from '@application/repositories/database-message-send-repository';
import { Injectable, Logger } from '@nestjs/common';
import { MessageSend as PrismaMessageSend } from '@prisma/client';
import { MessageSend } from '@application/entidades/messages-send/message-send';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PrismaMessageSendRepository
  implements DatabaseMessageSendRepository
{
  private readonly logger = new Logger(PrismaMessageSendRepository.name);
  constructor(private prisma: PrismaService) {}

  async create(messageSend: MessageSend): Promise<PrismaMessageSend> {
    this.logger.debug(`create - MessageSend`);
    // const raw = PrismaMessageSendMapper.toPrisma(messageSend);

    const responseCreate = await this.prisma.messageSend.create({
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
    this.logger.debug(`create - responseCreate`);
    this.logger.debug(responseCreate);

    return responseCreate;
  }
}
