import { MessageSend } from '@application/entidades/messages-send/message-send';
import { SoapMessageSendRepository } from '@application/repositories/soap-message-send-repository copy';
import { Injectable } from '@nestjs/common';
import { SoapSPBxService } from '../soap.spbx.service';

@Injectable()
export class SpbxMessageSendRepository implements SoapMessageSendRepository {
  constructor(private soapSPBxService: SoapSPBxService) {}
  async sendToSoap(messageSend: MessageSend): Promise<void> {
    console.log(this.soapSPBxService);
    console.log(messageSend);
  }
}
