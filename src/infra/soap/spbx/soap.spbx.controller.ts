import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
} from '@nestjs/common';

import { SoapSPBxService } from './soap.spbx.service';

export interface IConnetarInputs {
  ISPB: string; //* ISPB : código ISPB da Instituição.
  Usuario: string; //* identificação de um usuário válido com o perfil de digitador .
  Senha: string; //* senha de um usuário válido com o perfil de digitador .
  OldHash?: string; //* identificador de sessão anteriormente utilizado – caso o mesmo tenha sido invalidado.
}

export interface IConnetarResponse {
  Hash: string; //* Hash : identificador de sessão a ser utilizado nas próximas chamadas do serviço como um todo.
  Retorno: number; //* o método retornará CM_STATUS_CONECTADO se houver sucesso. Em caso de erro retornará CM_STATUS_DESCONECTADO ou um dos erros CMErros definidos neste documento.
}

export interface IDesconectarInputs {
  Hash: string; //* Hash : identificador de sessão obtido na última chamada (login) do método “Conectar”.
}

export interface IDesconectarResponse {
  Retorno: number; //* o método retornará CM_STATUS_CONECTADO se houver sucesso. Em caso de erro retornará CM_STATUS_DESCONECTADO ou um dos erros CMErros definidos neste documento.
}

export interface IStatusInputs {
  Hash: string; //* Hash : identificador de sessão obtido na última chamada (login) do método “Conectar”.
}

export interface IStatusResponse {
  Retorno: number; //* o método retornará CM_STATUS_CONECTADO se houver sucesso. Em caso de erro retornará CM_STATUS_DESCONECTADO.
}

export interface IMensagensNaFilaInputs {
  Hash: string; //* Hash : identificador de sessão obtido na última chamada (login) do método “Conectar”.
}

export interface IMensagensNaFilaResponse {
  Quantidade: number; //* número de mensagens disponíveis. Em caso de erro, o valor retornado será -1.
  Retorno: number; //* o método retornará CM_OK se houver sucesso. Em caso de erro, retornará um dos erros CMErros definidos neste documento.
}

export interface IBuscarMensagemInputs {
  Hash: string; //* Hash : identificador de sessão obtido na última chamada (login) do método “Conectar”.
  LastMsgID?: number; //* indentificador único da última mensagem consumida.
}

export interface IBuscarMensagemResponse {
  Retorno: number; //* o método retornará CM_OK se houver sucesso. Em caso de erro, retornará um dos erros CMErros definidos neste documento.
  Data: string; //* data do recebimento da mensagem, no formato dd/mm/aaaa.
  Hora: string; //* hora do recebimento da mensagem, no formato hh:mm:ss.
  MqID: string; //* identificador de fila (MQSeries/RSFN) da mensagem.
  MsgID: number; //* identificador único da mensagem no sistema SPBx/OBE.
  NuOP: string; //* identificador único da transação no SPB/RSFN.
  CodMsg: string; //* código da mensagem.
  ISPBEmissor: string; //* código ISPB da instituição emissora.
  MsgXML: string; //* conteúdo da mensagem.
}

export interface IRemoverMensagemInputs {
  Hash: string; //* Hash : identificador de sessão obtido na última chamada (login) do método “Conectar”.
  MsgID: number; //* identificador único (SPBx/OBE) da mensagem a ser removida.
}

export interface IRemoverMensagemResponse {
  Retorno: number; //* o método retornará CM_STATUS_CONECTADO se houver sucesso. Em caso de erro retornará CM_STATUS_DESCONECTADO.
}

export interface IEnviarMensagemInputs {
  Hash: string; //* identificador de sessão obtido na última chamada (login) do método “Conectar”.
  MsgXML: string; //*  conteúdo da mensagem.
  ISPBDestino: string; //* código ISPB da instituição financeira para a qual se deseja enviar a mensagem.
  Prioridade?: number; //* PRIORIDADE_BAIXA = 0 - PRIORIDADE_NORMAL = 1 (default) - PRIORIDADE_ALTA = 2
  TipoAgendamento?: string; //* AGENDAMENTO_SEM_REPETICAO = 0 (default – 1 única vez) - AGENDAMENTO_OPERACAO_BACEN = 1 - AGENDAMENTO_COM_REPETICAO = 2 (repetição diária)
  DataAgendamento?: string; //* no formato dd/mm/aaaa.
  HoraAgendamento?: string; //* no formato hh:mm.) da mensagem a ser removida.
}

export interface IEnviarMensagemResponse {
  Retorno: number; //* o método retornará CM_STATUS_CONECTADO se houver sucesso. Em caso de erro retornará CM_STATUS_DESCONECTADO.
  MsgID: number; //* identificador único (SPBx/OBE) da mensagem enviada.
  NuOP: string; //* identificador único da transação no SPB/RSFN.
}

export interface ISoapResponse {
  result: //* resultado em Json
  | IConnetarResponse
    | IDesconectarResponse
    | IStatusResponse
    | IMensagensNaFilaResponse
    | IBuscarMensagemResponse
    | IRemoverMensagemResponse
    | IEnviarMensagemResponse;
  rawResponse: any; //* Resposta do serviço SPBx
  soapHeader?: any; //* Soap Header
  rawRequest?: any; //* requisiçao para o serviço SPBx
}

@Controller('spbx')
export class SoapSPBxController {
  constructor(private readonly soapSPBxService: SoapSPBxService) {}

  @Get('describe')
  async describe(): Promise<object> {
    return await this.soapSPBxService.describe();
  }

  @Post('conectar')
  @HttpCode(HttpStatus.OK)
  async conectar(@Body() inputs: IConnetarInputs): Promise<object> {
    return await this.soapSPBxService.conectar(inputs);
  }

  @Post('desconectar')
  @HttpCode(HttpStatus.OK)
  async desconectar(@Body() inputs: IDesconectarInputs): Promise<object> {
    return await this.soapSPBxService.desconectar(inputs);
  }

  @Post('status')
  @HttpCode(HttpStatus.OK)
  async status(@Body() inputs: IStatusInputs): Promise<object> {
    return await this.soapSPBxService.status(inputs);
  }

  @Post('mensagens_fila')
  @HttpCode(HttpStatus.OK)
  async mensagensNaFila(
    @Body() inputs: IMensagensNaFilaInputs,
  ): Promise<object> {
    return await this.soapSPBxService.mensagensNaFila(inputs);
  }

  @Post('buscar_mensagem')
  @HttpCode(HttpStatus.OK)
  async buscarMensagem(@Body() inputs: IBuscarMensagemInputs): Promise<object> {
    return await this.soapSPBxService.buscarMensagem(inputs);
  }

  @Post('remover_mensagem')
  @HttpCode(HttpStatus.OK)
  async removerMensagem(
    @Body() inputs: IRemoverMensagemInputs,
  ): Promise<object> {
    return await this.soapSPBxService.removerMensagem(inputs);
  }

  @Post('enviar_mensagem')
  @HttpCode(HttpStatus.OK)
  async enviarMensagem(@Body() inputs: object): Promise<object> {
    return await this.soapSPBxService.enviarMensagem(inputs);
  }
}
