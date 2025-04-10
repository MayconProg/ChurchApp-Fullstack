-- DropForeignKey
ALTER TABLE "courseComments" DROP CONSTRAINT "courseComments_userId_fkey";

-- DropForeignKey
ALTER TABLE "courseRatings" DROP CONSTRAINT "courseRatings_userId_fkey";

-- DropForeignKey
ALTER TABLE "productComments" DROP CONSTRAINT "productComments_userId_fkey";

-- DropForeignKey
ALTER TABLE "productRatings" DROP CONSTRAINT "productRatings_userId_fkey";

-- AddForeignKey
ALTER TABLE "courseComments" ADD CONSTRAINT "courseComments_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "courseRatings" ADD CONSTRAINT "courseRatings_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "productComments" ADD CONSTRAINT "productComments_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "productRatings" ADD CONSTRAINT "productRatings_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
