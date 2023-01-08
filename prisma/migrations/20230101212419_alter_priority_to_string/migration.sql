-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_MessageSend" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "msgId" INTEGER NOT NULL,
    "nuOp" TEXT NOT NULL,
    "codMsg" TEXT NOT NULL,
    "ispbEmissor" TEXT NOT NULL,
    "ispbDestino" TEXT NOT NULL,
    "priority" TEXT,
    "tipoAgendamento" TEXT,
    "dataAgendamento" TEXT,
    "horaAgendamento" TEXT,
    "msgXml" TEXT NOT NULL,
    "statusMsg" INTEGER NOT NULL,
    "sentAt" DATETIME,
    "canceledAt" DATETIME,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_MessageSend" ("canceledAt", "codMsg", "createdAt", "id", "ispbDestino", "ispbEmissor", "msgId", "msgXml", "nuOp", "priority", "dataAgendamento", "horaAgendamento", "tipoAgendamento", "sentAt", "statusMsg") SELECT "canceledAt", "codMsg", "createdAt", "id", "ispbDestino", "ispbEmissor", "msgId", "msgXml", "nuOp", "priority", "dataAgendamento", "horaAgendamento", "tipoAgendamento", "sentAt", "statusMsg" FROM "MessageSend";
DROP TABLE "MessageSend";
ALTER TABLE "new_MessageSend" RENAME TO "MessageSend";
CREATE INDEX "MessageSend_msgId_idx" ON "MessageSend"("msgId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
