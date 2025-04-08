/*
  Warnings:

  - Added the required column `userId` to the `courseComments` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `courseRatings` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `productComments` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `productRatings` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "courseComments" ADD COLUMN     "userId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "courseRatings" ADD COLUMN     "userId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "productComments" ADD COLUMN     "userId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "productRatings" ADD COLUMN     "userId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "courseComments" ADD CONSTRAINT "courseComments_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "courseRatings" ADD CONSTRAINT "courseRatings_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "productComments" ADD CONSTRAINT "productComments_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "productRatings" ADD CONSTRAINT "productRatings_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
