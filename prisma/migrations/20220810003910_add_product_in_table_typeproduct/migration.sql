/*
  Warnings:

  - Added the required column `productId` to the `TypeProduct` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "TypeProduct" ADD COLUMN     "productId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "TypeProduct" ADD CONSTRAINT "TypeProduct_productId_fkey" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
