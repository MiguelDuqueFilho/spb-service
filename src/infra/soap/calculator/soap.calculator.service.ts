import { Inject, Injectable } from '@nestjs/common';
import { Client } from 'nestjs-soap';

@Injectable()
export class SoapCalculatorService {
  constructor(
    @Inject('SOAP_CALCULATOR_CLIENT') private readonly soapClient: Client,
  ) {}

  async describe() {
    return await this.soapClient.describe();
  }

  async add(inputs: object) {
    return new Promise((resolve, reject) => {
      this.soapClient.Calculator.CalculatorSoap.Add(
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
      this.soapClient.Calculator.CalculatorSoap.Subtract(
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
      this.soapClient.Calculator.CalculatorSoap.Multiply(
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
      this.soapClient.Calculator.CalculatorSoap.Divide(
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
