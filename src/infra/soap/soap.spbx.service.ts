import { Inject, Injectable } from '@nestjs/common';
import { Client } from 'nestjs-soap';

@Injectable()
export class SoapSPBxService {
  constructor(
    @Inject('SOAP_SPBX_CLIENT') private readonly soapSPBxClient: Client,
  ) {}

  async describe() {
    return await this.soapSPBxClient.describe();
  }

  async add(inputs: object) {
    return new Promise((resolve, reject) => {
      this.soapSPBxClient.Calculator.CalculatorSoap.Add(
        inputs,
        (
          error: any,
          result: object,
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

  async subtract(inputs: object) {
    return new Promise((resolve, reject) => {
      this.soapSPBxClient.Calculator.CalculatorSoap.Subtract(
        inputs,
        (
          error: any,
          result: object,
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

  async multiply(inputs: object) {
    return new Promise((resolve, reject) => {
      this.soapSPBxClient.Calculator.CalculatorSoap.Multiply(
        inputs,
        (
          error: any,
          result: object,
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

  async divide(inputs: object) {
    return new Promise((resolve, reject) => {
      this.soapSPBxClient.Calculator.CalculatorSoap.Divide(
        inputs,
        (
          error: any,
          result: object,
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
