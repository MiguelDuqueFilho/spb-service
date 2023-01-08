import { Inject, Injectable } from '@nestjs/common';
import { Client } from 'nestjs-soap';

import {
  IBuscarMensagemInputs,
  IBuscarMensagemResponse,
  IConnetarInputs,
  IConnetarResponse,
  IDesconectarInputs,
  IDesconectarResponse,
  IMensagensNaFilaResponse,
  IRemoverMensagemInputs,
  IRemoverMensagemResponse,
  ISoapResponse,
  IStatusInputs,
  IStatusResponse,
} from './controllers/soap.spbx.controller';

// const headers = {
//   'Content-Type': 'text/xml; charset=utf-8',
//   SOAPAction: 'urn:cmspb#cmspb#Conectar',
// };

@Injectable()
export class SoapSPBxService {
  constructor(
    @Inject('SOAP_SPBX_CLIENT')
    private readonly soapClient: Client,
  ) {}

  async describe() {
    return await this.soapClient.describe();
  }

  async conectar(inputs: IConnetarInputs): Promise<ISoapResponse> {
    this.soapClient.addSoapHeader({
      SOAPAction: 'urn:cmspb#cmspb#Conectar',
    });

    return new Promise((resolve, reject) => {
      this.soapClient.Envelope.Body.Conectar(
        inputs,
        (
          error: any,
          result: IConnetarResponse,
          rawResponse: any,
          soapHeader: any,
          rawRequest: any,
        ) => {
          if (error) reject(error);
          resolve({
            result,
            rawResponse,
            soapHeader,
            rawRequest,
          });
        },
      );
    });
  }

  async desconectar(inputs: IDesconectarInputs): Promise<ISoapResponse> {
    this.soapClient.addSoapHeader({
      SOAPAction: 'urn:cmspb#cmspb#Desconectar',
    });

    return new Promise((resolve, reject) => {
      this.soapClient.Envelope.Body.Desconectar(
        inputs,
        (
          error: any,
          result: IDesconectarResponse,
          rawResponse: any,
          soapHeader: any,
          rawRequest: any,
        ) => {
          if (error) reject(error);
          resolve({
            result,
            rawResponse,
            soapHeader,
            rawRequest,
          });
        },
      );
    });
  }

  async status(inputs: IStatusInputs): Promise<ISoapResponse> {
    this.soapClient.addSoapHeader({
      SOAPAction: 'urn:cmspb#cmspb#Status',
    });

    return new Promise((resolve, reject) => {
      this.soapClient.Envelope.Body.Status(
        inputs,
        (
          error: any,
          result: IStatusResponse,
          rawResponse: any,
          soapHeader: any,
          rawRequest: any,
        ) => {
          if (error) reject(error);
          resolve({
            result,
            rawResponse,
            soapHeader,
            rawRequest,
          });
        },
      );
    });
  }

  async mensagensNaFila(inputs: object): Promise<ISoapResponse> {
    this.soapClient.addSoapHeader({
      SOAPAction: 'urn:cmspb#cmspb#MensagensNaFila',
    });

    return new Promise((resolve, reject) => {
      this.soapClient.Envelope.Body.MensagensNaFila(
        inputs,
        (
          error: any,
          result: IMensagensNaFilaResponse,
          rawResponse: any,
          soapHeader: any,
          rawRequest: any,
        ) => {
          if (error) reject(error);
          resolve({
            result,
            rawResponse,
            soapHeader,
            rawRequest,
          });
        },
      );
    });
  }

  async buscarMensagem(inputs: IBuscarMensagemInputs): Promise<ISoapResponse> {
    this.soapClient.addSoapHeader({
      SOAPAction: 'urn:cmspb#cmspb#BuscarMensagem',
    });

    return new Promise((resolve, reject) => {
      this.soapClient.Envelope.Body.BuscarMensagem(
        inputs,
        (
          error: any,
          result: IBuscarMensagemResponse,
          rawResponse: any,
          soapHeader: any,
          rawRequest: any,
        ) => {
          if (error) reject(error);
          resolve({
            result,
            rawResponse,
            soapHeader,
            rawRequest,
          });
        },
      );
    });
  }

  async removerMensagem(
    inputs: IRemoverMensagemInputs,
  ): Promise<ISoapResponse> {
    this.soapClient.addSoapHeader({
      SOAPAction: 'urn:cmspb#cmspb#RemoverMensagem',
    });

    return new Promise((resolve, reject) => {
      this.soapClient.Envelope.Body.RemoverMensagem(
        inputs,
        (
          error: any,
          result: IRemoverMensagemResponse,
          rawResponse: any,
          soapHeader: any,
          rawRequest: any,
        ) => {
          if (error) reject(error);
          resolve({
            result,
            rawResponse,
            soapHeader,
            rawRequest,
          });
        },
      );
    });
  }

  async enviarMensagem(inputs: object): Promise<ISoapResponse> {
    this.soapClient.addSoapHeader({
      SOAPAction: 'urn:cmspb#cmspb#EnviarMensagem',
    });

    return new Promise((resolve, reject) => {
      this.soapClient.Envelope.Body.EnviarMensagem(
        inputs,
        (
          error: any,
          result: any,
          rawResponse: any,
          soapHeader: any,
          rawRequest: any,
        ) => {
          if (error) reject(error);
          resolve({
            result,
            rawResponse,
            soapHeader,
            rawRequest,
          });
        },
      );
    });
  }
}
