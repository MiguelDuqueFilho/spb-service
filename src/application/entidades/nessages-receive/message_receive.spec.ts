import { MessageReceive } from './message-receive';

describe('Message Received', () => {
  it('should be able create a message received', () => {
    const message = new MessageReceive({
      mqId: 'string',
      msgId: 1,
      nuOp: 'string',
      codMsg: 'string',
      ispbEmissor: 'string',
      msgXml: 'string',
      ReceivedAt: new Date(),
      statusMsg: 0,
      returnCode: 0,
      statusProc: 0,
      piloto: 0,
      dtBacenAt: new Date(),
      canceledAt: new Date(),
      createdAt: new Date(),
    });

    expect(message).toBeTruthy();
  });
});
