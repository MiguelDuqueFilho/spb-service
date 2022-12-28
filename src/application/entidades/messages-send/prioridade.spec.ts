import { Prioridade, TipoPrioridade } from './prioridade';

//? Prioridade (opcional) :
//!    PRIORIDADE_BAIXA = 0
//!    PRIORIDADE_NORMAL = 1 (default)
//!    PRIORIDADE_ALTA = 2

describe('Mensagem Prioridade', () => {
  it('should be able to validate prioridade = PRIORIDADE_BAIXA = 0 ', () => {
    const prioridade = new Prioridade(TipoPrioridade.baixa);

    expect(prioridade.value).toEqual(0);
  });

  it('should be able to validate prioridade = PRIORIDADE_NORMAL = 1 ', () => {
    const prioridade = new Prioridade(TipoPrioridade.normal);

    expect(prioridade.value).toEqual(1);
  });

  it('should be able to validate prioridade = PRIORIDADE_ALTA = 2 ', () => {
    const prioridade = new Prioridade(TipoPrioridade.alta);

    expect(prioridade.value).toEqual(2);
  });

  it('should be able to validate error on prioridade', () => {
    expect(() => new Prioridade(3)).toThrow();
  });
});
