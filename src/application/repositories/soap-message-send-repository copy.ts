import { MessageSend } from '@application/entidades/messages-send/message-send';

export abstract class SoapMessageSendRepository {
  abstract sendToSoap(messageSend: MessageSend): Promise<void>;
}
