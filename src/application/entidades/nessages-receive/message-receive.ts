import { Replace } from '@helpers/Replace';
import { randomUUID } from 'node:crypto';

export interface MessageReceiveProps {
  mqId: string; //* identificador de fila (MQSeries/RSFN) da mensagem.
  msgId: number; //* identificador único (SPBx/OBE) da mensagem enviada.
  nuOp: string; //* identificador único da transação no SPB/RSFN.
  codMsg: string; //* código da mensagem.
  ispbEmissor: string; //* código ISPB da instituição emissora.
  dataRecebimento: string; //* data do recebimento da mensagem, no formato dd/mm/aaaa.
  horaRecebimento: string; //* hora do recebimento da mensagem, no formato hh:mm:ss.
  ispbDestino: string; //* código ISPB da instituição financeira para a qual se deseja enviar a mensagem.
  msgXml: string; //*  conteúdo da mensagem.
  statusMsg: number; //* o método retornará CM_OK se houver sucesso. Em caso de erro, retornará um dos erros CMErros definidos neste documento.
  receivedAt: Date;
  createdAt: Date;
}

export class MessageReceive {
  [x: string]: any;
  private _id: string;
  private props: MessageReceiveProps;

  constructor(
    props: Replace<
      MessageReceiveProps,
      { receivedAt?: Date; createdAt?: Date }
    >,
    id?: string,
  ) {
    this._id = id ?? randomUUID();
    this.props = {
      ...props,
      receivedAt: props.receivedAt ?? new Date(),
      createdAt: props.createdAt ?? new Date(),
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

  public get dataRecebimento(): string {
    return this.props.dataRecebimento;
  }
  public set dataRecebimento(dataRecebimento: string) {
    this.props.dataRecebimento = dataRecebimento;
  }

  public get horaRecebimento(): string {
    return this.props.horaRecebimento;
  }
  public set horaRecebimento(horaRecebimento: string) {
    this.props.horaRecebimento = horaRecebimento;
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

  public get receivedAt(): Date {
    return this.props.receivedAt;
  }

  public get createdAt(): Date {
    return this.props.createdAt;
  }
}
