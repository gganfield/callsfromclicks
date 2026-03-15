-- CreateTable
CREATE TABLE "Client" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "clientNumber" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "passwordHash" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" TEXT NOT NULL DEFAULT 'pending_first_login'
);

-- CreateTable
CREATE TABLE "Code" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "clientId" INTEGER NOT NULL,
    "code" TEXT NOT NULL,
    "jobType" TEXT NOT NULL,
    "jobTypeShort" TEXT NOT NULL,
    "clientName" TEXT NOT NULL,
    "amount" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'unused',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expiresAt" DATETIME NOT NULL,
    "usedAt" DATETIME,
    CONSTRAINT "Code_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Client" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Client_clientNumber_key" ON "Client"("clientNumber");

-- CreateIndex
CREATE UNIQUE INDEX "Client_slug_key" ON "Client"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "Code_code_key" ON "Code"("code");
