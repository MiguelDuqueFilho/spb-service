import { MessageSend } from '@application/entidades/messages-send/message-send';
import { ProcessSendToSPB } from '@application/use-cases/process-message-to-spb';
import { Controller, Logger } from '@nestjs/common';
import { EventPattern, MessagePattern, Payload } from '@nestjs/microservices';

export interface PayloadSendToServiceRequest {
  id: string;
  codMsg: string;
  msgXml: string;
}

@Controller()
export class MessagingController {
  private readonly logger = new Logger(MessagingController.name);

  constructor(private processSendToSPB: ProcessSendToSPB) {}

  @EventPattern('message_service')
  async handleReceiveMessageToService(
    @Payload()
    request: PayloadSendToServiceRequest,
  ) {
    this.logger.log(`message_service - request`);
    // this.logger.log(request);
    await this.processSendToSPB.execute(request);
  }

  @EventPattern('message_pilot')
  async handleMessageToPilotReceived(@Payload() request: any) {
    this.logger.log(`message_pilot - request`);
    this.logger.log(request);
  }

  // @MessagePattern('message_pilot')
  // HandleEventSendMessageToPilot(@Payload() message: MessageSend): any {
  //   const realm = 'Nest';
  //   const key = message.id;
  //   this.logger.log(`MessagePattern - HandleEventSendMessageToPilot`);
  //   this.logger.log(message);

  //   return {
  //     headers: {
  //       kafka_nestRealm: realm,
  //     },
  //     key,
  //     value: JSON.stringify(message),
  //   };
  // }
}
