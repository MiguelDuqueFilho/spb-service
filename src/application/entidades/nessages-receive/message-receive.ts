import { Replace } from '@helpers/Replace';
import { randomUUID } from 'node:crypto';

export interface MessageReceiveProps {
  mqId: string;
  msgId: number;
  nuOp: string;
  codMsg: string;
  ispbEmissor: string;
  msgXml: string;
  ReceivedAt: Date;
  statusMsg: number;
  returnCode: number;
  statusProc: number;
  piloto: number;
  dtBacenAt?: Date | null;
  canceledAt?: Date | null;
  createdAt: Date;
}

export class MessageReceive {
  private _id: string;
  private props: MessageReceiveProps;

  constructor(
    props: Replace<MessageReceiveProps, { createdAt?: Date }>,
    id?: string,
  ) {
    this._id = id ?? randomUUID();
    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
    };
  }

  public get id() {
    return this._id;
  }

  public get mqId() {
    return this.props.mqId;
  }
  public set mqId(mqId: string) {
    this.props.mqId = mqId;
  }

  public get msgId() {
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

  public get msgXml() {
    return this.props.msgXml;
  }
  public set msgXml(msgXml: string) {
    this.props.msgXml = msgXml;
  }

  public get ReceivedAt() {
    return this.props.ReceivedAt;
  }
  public set ReceivedAt(ReceivedAt: Date) {
    this.props.ReceivedAt = ReceivedAt;
  }

  public get statusMsg() {
    return this.props.statusMsg;
  }
  public set statusMsg(statusMsg: number) {
    this.props.statusMsg = statusMsg;
  }

  public get returnCode() {
    return this.props.returnCode;
  }
  public set returnCode(returnCode: number) {
    this.props.returnCode = returnCode;
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

  public get dtBacenAt(): Date | null | undefined {
    return this.props.dtBacenAt;
  }
  public set dtBacen(nuOp: string | null | undefined) {
    this.props.dtBacenAt = nuOp ? new Date(nuOp.substring(8)) : null;
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
