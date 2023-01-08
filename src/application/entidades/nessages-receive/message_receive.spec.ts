import { MessageReceive } from './message-receive';

describe('Message Received', () => {
  it('should be able create a message received', () => {
    const message = new MessageReceive({
      mqId: 'string',
      msgId: 1,
      nuOp: 'string',
      codMsg: 'string',
      ispbEmissor: 'string',
      ispbDestino: 'string',
      dataRecebimento: '01/01/2023',
      horaRecebimento: '15:00:00',
      msgXml: '<DOC></DOC>',
      statusMsg: 0,
    });

    expect(message).toBeTruthy();
  });
});
