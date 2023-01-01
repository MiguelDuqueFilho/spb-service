import { Replace } from '@helpers/Replace';
import { randomUUID } from 'node:crypto';

export interface MessageSendProps {
  msgId: number; //* identificador único (SPBx/OBE) da mensagem enviada.
  nuOp: string; //* identificador único da transação no SPB/RSFN.
  codMsg: string; //* código da mensagem.
  ispbEmissor: string; //* código ISPB da instituição emissora.
  ispbDestino: string; //* código ISPB da instituição financeira para a qual se deseja enviar a mensagem.
  priority: string; //* PRIORIDADE_BAIXA = 0 - PRIORIDADE_NORMAL = 1 (default) - PRIORIDADE_ALTA = 2
  schedulingType?: string | null; //* AGENDAMENTO_SEM_REPETICAO = 0 (default – 1 única vez) - AGENDAMENTO_OPERACAO_BACEN = 1 - AGENDAMENTO_COM_REPETICAO = 2 (repetição diária)
  schedulingDate?: string | null; //* no formato dd/mm/aaaa.
  schedulingTime?: string | null; //* no formato hh:mm.) da mensagem a ser removida.
  msgXml: string; //*  conteúdo da mensagem.
  statusMsg: number; //* o método retornará CM_OK se houver sucesso. Em caso de erro, retornará um dos erros CMErros definidos neste documento.
  sentAt: Date;
  canceledAt?: Date | null;
  createdAt: Date;
}

export class MessageSend {
  private _id: string;
  private props: MessageSendProps;

  constructor(
    props: Replace<MessageSendProps, { createAt?: Date }>,
    id?: string,
  ) {
    this._id = id ?? randomUUID();
    this.props = {
      ...props,
      createdAt: props.createAt ?? new Date(),
    };
  }

  public get id() {
    return this._id;
  }

  public get msgId(): number {
    return this.props.msgId;
  }
  public set msgId(msgId: number) {
    this.props.msgId = msgId;
  }

  public get nuOp() {
    return this.props.nuOp;
  }
  public set nuOp(nuOp: string) {
    this.props.nuOp = nuOp;
  }

  public get codMsg() {
    return this.props.codMsg;
  }
  public set codMsg(codMsg: string) {
    this.props.codMsg = codMsg;
  }

  public get ispbEmissor() {
    return this.props.ispbEmissor;
  }
  public set ispbEmissor(ispbEmissor: string) {
    this.props.ispbEmissor = ispbEmissor;
  }

  public get ispbDestino() {
    return this.props.ispbDestino;
  }
  public set ispbDestino(ispbDestino: string) {
    this.props.ispbDestino = ispbDestino;
  }

  public get priority() {
    return this.props.priority;
  }
  public set priority(priority: string) {
    this.props.priority = priority;
  }

  public get schedulingType(): string | null | undefined {
    return this.props.schedulingType;
  }
  public set schedulingType(schedulingType: string | null | undefined) {
    this.props.schedulingType = schedulingType;
  }

  public get schedulingDate(): string | null | undefined {
    return this.props.schedulingDate;
  }
  public set schedulingDate(schedulingDate: string | null | undefined) {
    this.props.schedulingDate = schedulingDate;
  }

  public get schedulingTime(): string | null | undefined {
    return this.props.schedulingTime;
  }
  public set schedulingTime(schedulingTime: string | null | undefined) {
    this.props.schedulingTime = schedulingTime;
  }

  public get msgXml() {
    return this.props.msgXml;
  }
  public set msgXml(msgXml: string) {
    this.props.msgXml = msgXml;
  }

  public get statusMsg() {
    return this.props.statusMsg;
  }
  public set statusMsg(statusMsg: number) {
    this.props.statusMsg = statusMsg;
  }

  public get sentAt(): Date {
    return this.props.sentAt;
  }
  public set sentAt(sentAt: Date) {
    this.props.sentAt = sentAt;
  }

  public get canceledAt(): Date | null | undefined {
    return this.props.canceledAt;
  }
  public cancel() {
    this.props.canceledAt = new Date();
  }

  public get createdAt(): Date {
    return this.props.createdAt;
  }
}
