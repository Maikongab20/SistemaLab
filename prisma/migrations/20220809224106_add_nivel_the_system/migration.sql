/*
  Warnings:

  - Added the required column `nivel` to the `Access` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Access" ADD COLUMN     "nivel" TEXT NOT NULL;
