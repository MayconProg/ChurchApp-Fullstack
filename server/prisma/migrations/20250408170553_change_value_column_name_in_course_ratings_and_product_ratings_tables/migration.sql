/*
  Warnings:

  - Changed the type of `value` on the `courseRatings` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `value` on the `productRatings` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "courseRatings" DROP COLUMN "value",
ADD COLUMN     "value" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "productRatings" DROP COLUMN "value",
ADD COLUMN     "value" INTEGER NOT NULL;
