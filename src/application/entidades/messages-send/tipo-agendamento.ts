export enum Agendamento {
  semRepeticao = '0', //* = 0  (default – 1 única vez)
  operacaoBacen = '1', //* = 1
  comRepeticao = '2', //* = 2 (repetição diária)
}

export class TipoAgendamento {
  private readonly tipoAgendamento: string;

  constructor(tipoAgendamento: string) {
    const isTipoAgendamentoValid =
      this.validateTipoAgendamento(tipoAgendamento);

    if (!isTipoAgendamentoValid) {
      throw new Error('Agendamento invalido!');
    }

    this.tipoAgendamento = tipoAgendamento;
  }

  private validateTipoAgendamento(tipoAgendamento: string): boolean {
    switch (tipoAgendamento) {
      case Agendamento.semRepeticao:
      case Agendamento.operacaoBacen:
      case Agendamento.comRepeticao: {
        return true;
      }
      default: {
        return false;
      }
    }
  }

  get value(): string {
    return this.tipoAgendamento;
  }
}
