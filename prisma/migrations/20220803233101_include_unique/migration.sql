/*
  Warnings:

  - A unique constraint covering the columns `[userId]` on the table `AccessUser` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[accessId]` on the table `AccessUser` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "AccessUser_userId_key" ON "AccessUser"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "AccessUser_accessId_key" ON "AccessUser"("accessId");
