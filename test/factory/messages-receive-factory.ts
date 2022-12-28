import {
  MessageReceive,
  MessageReceiveProps,
} from '@application/entidades/nessages-receive/message-receive';

type Override = Partial<MessageReceiveProps>;

export function MakeMessageReceive(override: Override = {}) {
  return new MessageReceive({
    mqId: 'msId-1',
    msgId: 1,
    nuOp: 'NuOp-1',
    codMsg: 'GEN00001',
    ispbEmissor: '12345678',
    msgXml: '<DOC></DOC>',
    ReceivedAt: new Date(),
    statusMsg: 0,
    returnCode: 0,
    statusProc: 0,
    piloto: 0,
    ...override,
  });
}
