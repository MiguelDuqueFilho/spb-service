import { Replace } from '@helpers/Replace';
import { randomUUID } from 'node:crypto';

export interface MessageSendProps {
  originId: string;
  msgId: number | null;
  nuOp: string;
  codMsg: string;
  ispbEmissor: string;
  ispbDestino: string;
  prioridade?: number | null;
  tipoAgendamento?: string | null;
  dataAgendamento?: string | null;
  horaAgendamento?: string | null;
  msgXml: string;
  statusMsg: number;
  sentAt?: Date | null;
  canceledAt?: Date | null;
  createdAt: Date;
}

export class MessageSend {
  private _id: string;
  private props: MessageSendProps;

  constructor(
    props: Replace<
      MessageSendProps,
      { msgId?: number; statusMsg?: number; createAt?: Date }
    >,
    id?: string,
  ) {
    this._id = id ?? randomUUID();
    this.props = {
      ...props,
      msgId: props.msgId ?? null, //* ainda não processada
      statusMsg: props.statusMsg ?? -1, //* ainda não processada
      createdAt: props.createdAt ?? new Date(),
    };
  }

  public get id() {
    return this._id;
  }

  public get originId(): string {
    return this.props.originId;
  }
  public set originId(originId: string) {
    this.props.originId = originId;
  }

  public get msgId(): number | null | undefined {
    return this.props.msgId;
  }
  public setMsgId(msgId: number) {
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

  public get prioridade(): number | null | undefined {
    return this.props.prioridade;
  }
  public set prioridade(prioridade: number | null | undefined) {
    this.props.prioridade = prioridade;
  }

  public get tipoAgendamento(): string | null | undefined {
    return this.props.tipoAgendamento;
  }
  public set tipoAgendamento(tipoAgendamento: string | null | undefined) {
    this.props.tipoAgendamento = tipoAgendamento;
  }

  public get dataAgendamento(): string | null | undefined {
    return this.props.dataAgendamento;
  }
  public set dataAgendamento(dataAgendamento: string | null | undefined) {
    this.props.dataAgendamento = dataAgendamento;
  }

  public get horaAgendamento(): string | null | undefined {
    return this.props.horaAgendamento;
  }
  public set horaAgendamento(horaAgendamento: string | null | undefined) {
    this.props.horaAgendamento = horaAgendamento;
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

  public get sentAt(): Date | null | undefined {
    return this.props.sentAt;
  }
  public sent() {
    this.props.sentAt = new Date();
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
