import { Replace } from '@helpers/Replace';
import { randomUUID } from 'node:crypto';

//todo Hash : identificador de sessão obtido na última chamada (login) do método “Conectar”.
//todo MsgXML : conteúdo da mensagem.
//todo ISPBDestino : código ISPB da instituição financeira para a qual se deseja enviar a mensagem.
//? Prioridade (opcional) :
//!    PRIORIDADE_BAIXA = 0
//!    PRIORIDADE_NORMAL = 1 (default)
//!    PRIORIDADE_ALTA = 2
//? TipoAgendamento (opcional) :
//!    AGENDAMENTO_SEM_REPETICAO = 0 (default – 1 única vez)
//!    AGENDAMENTO_OPERACAO_BACEN = 1
//!    AGENDAMENTO_COM_REPETICAO = 2 (repetição diária)
//todo DataAgendamento (opcional) : no formato dd/mm/aaaa.
//todo HoraAgendamento (opcional) : no formato hh:mm.
//todo  dateBacen = NumOP[8:]

export interface MessageSendProps {
  msgId?: number | null;
  nuOp: string;
  returnSend?: number | null;
  codMsg: string;
  ispbDestino: string;
  msgXml: string;
  prioridade?: number | null;
  agendamento?: number | null;
  statusMsg: number;
  statusProc: number;
  piloto: number;
  sendAt?: Date | null;
  bacenAt?: Date | null;
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

  public get msgId(): number | null | undefined {
    return this.props.msgId;
  }
  public set msgId(msgId: number | null | undefined) {
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

  public get ispbDestino() {
    return this.props.ispbDestino;
  }
  public set ispbDestino(ispbDestino: string) {
    this.props.ispbDestino = ispbDestino;
  }

  public get msgXml() {
    return this.props.msgXml;
  }
  public set msgXml(msgXml: string) {
    this.props.msgXml = msgXml;
  }

  public get sendAt(): Date | null | undefined {
    return this.props.sendAt;
  }
  public set sendAt(sendAt: Date | null | undefined) {
    this.props.sendAt = sendAt;
  }

  public get bacenAt(): Date | null | undefined {
    return this.props.sendAt;
  }
  public set bacenAt(sendAt: Date | null | undefined) {
    this.props.sendAt = sendAt;
  }

  public get statusMsg() {
    return this.props.statusMsg;
  }
  public set statusMsg(statusMsg: number) {
    this.props.statusMsg = statusMsg;
  }

  public get returnSend(): number | null | undefined {
    return this.props.returnSend;
  }
  public set returnSend(returnSend: number | null | undefined) {
    this.props.returnSend = returnSend;
  }

  public get statusProc() {
    return this.props.statusProc;
  }
  public set statusProc(statusProc: number) {
    this.props.statusProc = statusProc;
  }

  public get piloto() {
    return this.props.piloto;
  }
  public set piloto(piloto: number) {
    this.props.piloto = piloto;
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
