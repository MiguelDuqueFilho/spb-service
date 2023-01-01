export enum TipoPrioridade {
  baixa = '0', //* = 0
  normal = '1', //* = 1
  alta = '2', //* = 2
}

export class Prioridade {
  private readonly prioridade: string;

  constructor(prioridade: string) {
    const isPrioridadeValid = this.validatePrioridade(prioridade);

    if (!isPrioridadeValid) {
      throw new Error('Prioridade invalida!');
    }

    this.prioridade = prioridade;
  }

  private validatePrioridade(prioridade: string): boolean {
    switch (prioridade) {
      case TipoPrioridade.baixa:
      case TipoPrioridade.normal:
      case TipoPrioridade.alta: {
        return true;
      }
      default: {
        return false;
      }
    }
  }

  get value(): string {
    return this.prioridade;
  }
}
