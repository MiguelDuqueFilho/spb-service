-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_MessageSend" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "originId" TEXT NOT NULL,
    "msgId" INTEGER NOT NULL,
    "nuOp" TEXT NOT NULL,
    "codMsg" TEXT NOT NULL,
    "ispbEmissor" TEXT NOT NULL,
    "ispbDestino" TEXT NOT NULL,
    "prioridade" INTEGER,
    "tipoAgendamento" TEXT,
    "dataAgendamento" TEXT,
    "horaAgendamento" TEXT,
    "msgXml" TEXT NOT NULL,
    "statusMsg" INTEGER NOT NULL,
    "sentAt" DATETIME,
    "canceledAt" DATETIME,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_MessageSend" ("canceledAt", "codMsg", "createdAt", "dataAgendamento", "horaAgendamento", "id", "ispbDestino", "ispbEmissor", "msgId", "msgXml", "nuOp", "originId", "prioridade", "sentAt", "statusMsg", "tipoAgendamento") SELECT "canceledAt", "codMsg", "createdAt", "dataAgendamento", "horaAgendamento", "id", "ispbDestino", "ispbEmissor", "msgId", "msgXml", "nuOp", "originId", "prioridade", "sentAt", "statusMsg", "tipoAgendamento" FROM "MessageSend";
DROP TABLE "MessageSend";
ALTER TABLE "new_MessageSend" RENAME TO "MessageSend";
CREATE INDEX "MessageSend_msgId_idx" ON "MessageSend"("msgId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
