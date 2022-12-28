import { Agendamento, TipoAgendamento } from './tipo-agendamento';

//? TipoAgendamento (opcional) :
//!    AGENDAMENTO_SEM_REPETICAO = 0 (default – 1 única vez)
//!    AGENDAMENTO_OPERACAO_BACEN = 1
//!    AGENDAMENTO_COM_REPETICAO = 2 (repetição diária)

describe('Mensagem Agendamento', () => {
  it('should be able to validate agendamento = AGENDAMENTO_SEM_REPETICAO = 0 ', () => {
    const prioridade = new TipoAgendamento(Agendamento.semRepeticao);

    expect(prioridade.value).toEqual(0);
  });

  it('should be able to validate agendamento = AGENDAMENTO_OPERACAO_BACEN = 1 ', () => {
    const prioridade = new TipoAgendamento(Agendamento.operacaoBacen);

    expect(prioridade.value).toEqual(1);
  });

  it('should be able to validate agendamento = AGENDAMENTO_COM_REPETICAO = 2 ', () => {
    const prioridade = new TipoAgendamento(Agendamento.comRepeticao);

    expect(prioridade.value).toEqual(2);
  });

  it('should be able to validate error on prioridade', () => {
    expect(() => new TipoAgendamento(3)).toThrow();
  });
});
