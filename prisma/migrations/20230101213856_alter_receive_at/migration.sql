/*
  Warnings:

  - Made the column `receivedAt` on table `MessageReceive` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_MessageReceive" (
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
    "receivedAt" DATETIME NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_MessageReceive" ("codMsg", "createdAt", "id", "ispbDestino", "ispbEmissor", "mqId", "msgId", "msgXml", "nuOp", "receivedAt", "dataRecebimento", "horaRecebimento", "statusMsg") SELECT "codMsg", "createdAt", "id", "ispbDestino", "ispbEmissor", "mqId", "msgId", "msgXml", "nuOp", "receivedAt", "dataRecebimento", "horaRecebimento", "statusMsg" FROM "MessageReceive";
DROP TABLE "MessageReceive";
ALTER TABLE "new_MessageReceive" RENAME TO "MessageReceive";
CREATE INDEX "MessageReceive_msgId_idx" ON "MessageReceive"("msgId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
