import { MessageSend } from './message-send';
import { Prioridade, TipoPrioridade } from './prioridade';
import { Agendamento, TipoAgendamento } from './tipo-agendamento';

describe('Message Sendd', () => {
  it('should be able create a message Sendd', () => {
    const message = new MessageSend({
      msgId: 1,
      nuOp: 'string',
      codMsg: 'string',
      ispbDestino: 'string',
      msgXml: 'string',
      prioridade: new Prioridade(TipoPrioridade.normal).value,
      agendamento: new TipoAgendamento(Agendamento.operacaoBacen).value,
      statusMsg: 0,
      returnSend: 0,
      statusProc: 0,
      sendAt: new Date(),
      piloto: 0,
      bacenAt: new Date(),
      canceledAt: null,
      createdAt: new Date(),
    });

    expect(message).toBeTruthy();
  });
});
