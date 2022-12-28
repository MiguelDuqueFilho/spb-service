import { Inject, Injectable } from '@nestjs/common';
import { Client } from 'nestjs-soap';

@Injectable()
export class SoapSPBxService {
  constructor(
    @Inject('SOAP_SPBX_CLIENT') private readonly soapSPBxClient: Client,
  ) {}

  async Add(xml: any) {
    console.log(`XML ============>>>>`);
    console.log(xml);
    return this.soapSPBxClient.emit('message', xml, 'Add');
  }
}
