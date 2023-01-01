import { MessageSend } from './message-send';
import { Prioridade, TipoPrioridade } from './prioridade';
import { Agendamento, TipoAgendamento } from './tipo-agendamento';

describe('Message Send', () => {
  it('should be able create a message Send', () => {
    const message = new MessageSend({
      msgId: 1,
      nuOp: 'string',
      codMsg: 'string',
      ispbEmissor: 'string',
      ispbDestino: 'string',
      msgXml: '<DOCX></DOC>',
      statusMsg: 0,
      priority: new Prioridade(TipoPrioridade.normal).value,
      schedulingType: new TipoAgendamento(Agendamento.operacaoBacen).value,
      schedulingDate: '01/01/2023',
      schedulingTime: '15:00:00',
      sentAt: new Date(),
      createdAt: new Date(),
    });

    expect(message).toBeTruthy();
  });
});
