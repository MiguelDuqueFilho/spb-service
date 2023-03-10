const spbx_erros = {
  CM_OK: 0,
  CM_STATUS_CONECTADO: 1,
  CM_STATUS_DESCONECTADO: 2,
  CM_CONECTANDO: 3,
  CM_VERIFICANDO_CONEXAO: 4,
  CM_STATUS_ENVIADO: 5,
  CM_ENVIANDO: 6,
  CM_STATUS_RECEBIDO: 7,
  CM_RECEBENDO: 8,
  CM_STATUS_DOWNLODED: 9,
  CM_DOWNLOADING: 10,
  CM_EXECUTANDO: 11,
  CM_ERRO: 500,
  CM_ERRO_DE_CONEXAO: 501,
  CM_ERRO_OBJETO_EM_USO: 502,
  CM_ERRO_DESCONHECIDO: 503,
  CM_ERRO_FALTA_DE_PARAMETRO: 504,
  CM_ERRO_MODO_PERSISTENTE: 505,
  CM_ERRO_TIME_OUT_DE_RESPOSTA: 506,
  CM_ERRO_MSG_NAO_REMOVIDA: 507,
  CM_ERRO_TAMANHO_DE_PARAMETRO: 508,
  CM_ERRO_TAMANHO_DA_MENSAGEM_NAO_CONFERE: 509,
  CM_ERRO_SEM_MENSAGENS_NA_FILA: 510,
  CM_ERRO_USUARIO_SEM_PERMISSAO: 511,
  CM_ERRO_LOGON_RECUSADO: 512,
  CM_ERRO_VERSAO_INCORRETA: 513,
  CM_ERRO_HOST_NAO_LOCALIZADO: 514,
  CM_ERRO_PARSER_INVALID_PARM: 515,
  CM_ERRO_PARSER_INIT_ERR: 516,
  CM_ERRO_PARSER_XML_EXCEPTION: 517,
  CM_ERRO_PARSER_XML_ERR: 518,
  CM_ERRO_PARSER_OVERFLOW: 519,
  CM_ERRO_PARSER_XSD_FILE_NOT_FOUND: 520,
  CM_ERRO_TAG_CODMSG_INEXISTENTE: 521,
  CM_ERRO_TAG_NUOP_INEXISTENTE: 522,
  CM_ERRO_GERAR_NUOP: 523,
  CM_ERRO_MSGID_INEXISTENTE: 524,
  CM_ERRO_MSGID_REMOVIDO_ANTERIORMENTE: 525,
  CM_ERRO_IFID_EXISTENTE: 526,

  CM_ERRO_IFID_NAO_INFORMADO: 527,
  CM_ERRO_MSG_NAO_ENVIADA: 528,
  CM_ERRO_IMPOSSIVEL_OBTER_RESPOSTA: 529,
  CM_ERRO_MSG_NAO_OBTIDA: 530,
  CM_ERRO_GERAR_MSGID: 531,
  CM_ERRO_MSG_DUPLICADA: 532,
  CM_ERRO_INFOTED_HORARIO_INVALIDO: 533,
  CM_ERRO_INFOTED_USUARIO_INVALIDO: 534,
  CM_DICT_OK: 0,
  CM_DICT_ERRO_DE_CONEXAO: 600,
  CM_DICT_ERRO_TIMEOUT: 601,
  CM_DICT_ERRO_XML_PARSER: 602,
  CM_DICT_ERRO_BACEN_400: 603,
  CM_DICT_ERRO_BACEN_403: 604,
  CM_DICT_ERRO_BACEN_404: 605,
  CM_DICT_ERRO_BACEN_429: 606,
  CM_DICT_ERRO_BACEN_503: 607,
  CM_DICT_ERRO_BACEN_GENERICO: 608,
  CM_DICT_ERRO_GENERICO: 609,
  CM_QRCODE_OK: 0,
  CM_QRCODE_ERRO_DE_CONEXAO: 650,
  CM_QRCODE_ERRO_TIMEOUT: 651,
  CM_QRCODE_ERRO_XML_PARSER: 652,
  CM_QRCODE_ERRO_BACEN_GENERICO: 658,
  CM_QRCODE_ERRO_GENERICO: 659,
};

export function spbxErrorDescription(error: number) {
  let description = '';
  switch (error) {
    case spbx_erros.CM_STATUS_DESCONECTADO:
      description =
        'Quando retornado pelo m??todo Status essa situa????o ?? esperada, significa apenas que a conex??o/sess??o foi inativada. Se for retornado pelo m??todo Conectar , indica erro no processo de conex??o.';
      break;

    case spbx_erros.CM_STATUS_DESCONECTADO:
      description =
        'Quando retornado pelo m??todo Status essa situa????o ?? esperada, significa apenas que a conex??o/sess??o foi inativada. Se for retornado pelo m??todo Conectar , indica erro no processo de conex??o.';
      break;

    case spbx_erros.CM_STATUS_DESCONECTADO:
      description =
        'Quando retornado pelo m??todo Status essa situa????o ?? esperada, significa apenas que a conex??o/sess??o foi inativada. Se for retornado pelo m??todo Conectar , indica erro no processo de conex??o.';
      break;

    case spbx_erros.CM_STATUS_DESCONECTADO:
      description =
        'Quando retornado pelo m??todo Status essa situa????o ?? esperada, significa apenas que a conex??o/sess??o foi inativada. Se for retornado pelo m??todo Conectar , indica erro no processo de conex??o.';
      break;

    case spbx_erros.CM_STATUS_DESCONECTADO:
      description =
        'Quando retornado pelo m??todo Status essa situa????o ?? esperada, significa apenas que a conex??o/sess??o foi inativada. Se for retornado pelo m??todo Conectar , indica erro no processo de conex??o.';
      break;

    case spbx_erros.CM_ERRO:
      description =
        'Erro gen??rico. Procedimento : Entrar em contato com o Suporte.';
      break;

    case spbx_erros.CM_ERRO_DE_CONEXAO:
      description =
        'Um m??todo de envio/recebimento foi chamado sem que a comunica????o estivesse estabelecida. Procedimento : Refazer a conex??o/sess??o com a Mensageria.';
      break;

    case spbx_erros.CM_ERRO_MSG_NAO_REMOVIDA:
      description =
        'Falha por Timeout na opera????o RemoverMensagem. Procedimento : A aplica????o deve repetir a chamada pelo menos uma vez. Se persistir, entrar em contato com o Suporte.';
      break;

    case spbx_erros.CM_ERRO_SEM_MENSAGENS_NA_FILA:
      description =
        'Um m??todo de busca de mensagens foi acionado, mas n??o h?? mensagens dispon??veis para este Legado. Procedimento : Recomenda-se que sempre seja verificada a exist??ncia de mensagens (m??todo MensagensNaFila ) antes de efetuar a busca. Opcionalmente, a aplica????o pode apenas ignorar as opera????es de busca de mensagem que tiverem esse retorno.';
      break;

    case spbx_erros.CM_ERRO_USUARIO_SEM_PERMISSAO:
      description =
        'O usu??rio n??o tem permiss??o para envio de uma mensagem espec??fica. Procedimento : O administrador do sistema (???master???) deve verificar as configura????es do perfil/usu??rio do Legado.';
      break;

    case spbx_erros.CM_ERRO_LOGON_RECUSADO:
      description =
        'O m??todo Conectar informou login ou senha inv??lidos. Procedimento : Verifique a conta de usu??rio utilizada para conex??o.';
      break;

    case spbx_erros.CM_ERRO_IFID_NAO_INFORMADO:
      description =
        ' (somente para OCX) O campo IFID n??o foi informado nas chamadas do modo Ass??ncrono. Procedimento : Verificar os par??metros passados pela aplica????o.';
      break;

    case spbx_erros.CM_ERRO_MSG_NAO_ENVIADA:
      description =
        'Falha por Timeout nas opera????es de envio de mensagem. Procedimento : A aplica????o deve repetir a chamada pelo menos uma vez. Se persistir, entrar em contato com o Suporte.';
      break;

    case spbx_erros.CM_ERRO_MSG_NAO_OBTIDA:
      description =
        'Falha por Timeout nas opera????es de recebimento de mensagem. Procedimento : A aplica????o deve repetir a chamada pelo menos uma vez. Se persistir, entrar em contato com o Suporte.';
      break;

    case spbx_erros.CM_ERRO_IMPOSSIVEL_OBTER_RESPOSTA:
      description =
        '(somente para OCX) N??o foi poss??vel obter retorno do Server e nem fazer o cancelamento da transa????o. Ou seja, a OCX n??o tem condi????es de confirmar se a solicita????o foi atendida ou n??o. Procedimento : Se o erro for retornado por um m??todo de recebimento de mensagem, a aplica????o pode repetir a chamada uma ou mais vezes. Se for retornado por um m??todo de envio de mensagem, o ???retry??? autom??tico N??O deve ser feito. Entre em contato com o Suporte para mais informa????es.';
      break;

    case spbx_erros.CM_ERRO_PARSER_INVALID_PARM:
    case spbx_erros.CM_ERRO_PARSER_INIT_ERR:
    case spbx_erros.CM_ERRO_PARSER_XML_EXCEPTION:
    case spbx_erros.CM_ERRO_PARSER_XML_ERR:
    case spbx_erros.CM_ERRO_PARSER_OVERFLOW:
    case spbx_erros.CM_ERRO_PARSER_XSD_FILE_NOT_FOUND:
      description =
        'Os erros acima referem-se a problemas na valida????o da mensagem XML. Procedimento : Se o erro for retornado por um m??todo de envio de mensagem, verifique a estrutura do XML gerado pelo Legado. Se for retornado por um m??todo de recebimento (ou seja, a IF recebeu de outro participante do SPB uma mensagem mal-formatada), entrar em contato com o Suporte para obter mais informa????es.';
      break;

    case spbx_erros.CM_ERRO_MSG_DUPLICADA:
      description =
        'Ocorre quando o Legado tenta enviar uma mesma mensagem XML pela segunda vez. Procedimento : Este controle ?? habilitado pelo usu??rio administrador (Master) do SPB/x, e o envio da mensagem duplicada n??o ser?? permitido. Verificar no Legado a causa da ocorr??ncia.';
      break;

    default:
      description = 'Erro desconhecido.';
      break;
  }
  return description;
}
