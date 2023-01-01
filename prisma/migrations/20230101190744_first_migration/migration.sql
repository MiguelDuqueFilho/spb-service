-- CreateTable
CREATE TABLE "MessageSend" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "msgId" INTEGER NOT NULL,
    "nuOp" TEXT NOT NULL,
    "codMsg" TEXT NOT NULL,
    "ispbEmissor" TEXT NOT NULL,
    "ispbDestino" TEXT NOT NULL,
    "priority" INTEGER,
    "schedulingType" TEXT,
    "schedulingDate" TEXT,
    "schedulingTime" TEXT,
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
    "receivedDate" TEXT NOT NULL,
    "receivedTime" TEXT NOT NULL,
    "msgXml" TEXT NOT NULL,
    "statusMsg" INTEGER NOT NULL,
    "receivedAt" DATETIME,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateIndex
CREATE INDEX "MessageSend_msgId_idx" ON "MessageSend"("msgId");

-- CreateIndex
CREATE INDEX "MessageReceive_msgId_idx" ON "MessageReceive"("msgId");
