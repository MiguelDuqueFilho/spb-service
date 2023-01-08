import { MessageSend } from './message-send';
import { Prioridade, TipoPrioridade } from './prioridade';
import { Agendamento, TipoAgendamento } from './tipo-agendamento';

describe('Message Send', () => {
  it('should be able create a message Send', () => {
    const message = new MessageSend({
      msgId: 1,
      originId: 'string',
      nuOp: 'string',
      codMsg: 'string',
      ispbEmissor: 'string',
      ispbDestino: 'string',
      msgXml: '<DOCX></DOC>',
      statusMsg: 0,
      prioridade: new Prioridade(TipoPrioridade.normal).value,
      tipoAgendamento: new TipoAgendamento(Agendamento.operacaoBacen).value,
      dataAgendamento: '01/01/2023',
      horaAgendamento: '15:00:00',
      sentAt: new Date(),
      createdAt: new Date(),
    });

    expect(message).toBeTruthy();
  });
});
