import { Inject, Injectable } from '@nestjs/common';
import { Client } from 'nestjs-soap';

@Injectable()
export class SoapSPBxService {
  private result = {};
  constructor(
    @Inject('SOAP_SPBX_CLIENT') private readonly soapSPBxClient: Client,
  ) {}

  async describe() {
    return await this.soapSPBxClient.describe();
  }

  async test(inputs: object) {
    const callback = async function (
      err: any,
      result: object,
      rawResponse: any,
      soapHeader: any,
      rawRequest: any,
    ) {
      if (err) {
        console.log(err);
        return err;
      } else {
        console.log(`result`);
        console.log(result);
        console.log(`rawResponse`);
        console.log(rawResponse);
        console.log(`soapHeader`);
        console.log(soapHeader);
        console.log(`rawRequest`);
        console.log(rawRequest);

        return result;
      }
    };

    await this.soapSPBxClient.Calculator.CalculatorSoap.Multiply(
      inputs,
      callback,
    );

    const result = await this.soapSPBxClient.rawListeners;
    console.log(result);
    return { result };
  }
}
