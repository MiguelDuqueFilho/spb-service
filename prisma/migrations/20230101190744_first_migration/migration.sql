-- CreateTable
CREATE TABLE "MessageSend" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "msgId" INTEGER NOT NULL,
    "nuOp" TEXT NOT NULL,
    "codMsg" TEXT NOT NULL,
    "ispbEmissor" TEXT NOT NULL,
    "ispbDestino" TEXT NOT NULL,
    "priority" INTEGER,
    "tipoAgendamento" TEXT,
    "dataAgendamento" TEXT,
    "horaAgendamento" TEXT,
    "msgXml" TEXT NOT NULL,
    "statusMsg" INTEGER NOT NULL,
    "sentAt" DATETIME,
    "canceledAt" DATETIME,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "MessageReceive" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "mqId" TEXT NOT NULL,
    "msgId" INTEGER NOT NULL,
    "nuOp" TEXT NOT NULL,
    "codMsg" TEXT NOT NULL,
    "ispbEmissor" TEXT NOT NULL,
    "ispbDestino" TEXT NOT NULL,
    "dataRecebimento" TEXT NOT NULL,
    "horaRecebimento" TEXT NOT NULL,
    "msgXml" TEXT NOT NULL,
    "statusMsg" INTEGER NOT NULL,
    "receivedAt" DATETIME,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateIndex
CREATE INDEX "MessageSend_msgId_idx" ON "MessageSend"("msgId");

-- CreateIndex
CREATE INDEX "MessageReceive_msgId_idx" ON "MessageReceive"("msgId");
