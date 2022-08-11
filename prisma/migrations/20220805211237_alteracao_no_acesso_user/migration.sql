/*
  Warnings:

  - Added the required column `system` to the `AccessUser` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "AccessUser" ADD COLUMN     "system" BOOLEAN NOT NULL;
