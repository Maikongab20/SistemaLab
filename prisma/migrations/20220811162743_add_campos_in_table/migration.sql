/*
  Warnings:

  - Added the required column `EMAIL` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "EMAIL" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "product" ADD COLUMN     "description" TEXT NOT NULL;
