-- DropForeignKey
ALTER TABLE "UsersOnCourses" DROP CONSTRAINT "UsersOnCourses_courseId_fkey";

-- DropForeignKey
ALTER TABLE "UsersOnCourses" DROP CONSTRAINT "UsersOnCourses_userId_fkey";

-- DropForeignKey
ALTER TABLE "contents" DROP CONSTRAINT "contents_courseId_fkey";

-- DropForeignKey
ALTER TABLE "courseComments" DROP CONSTRAINT "courseComments_courseId_fkey";

-- DropForeignKey
ALTER TABLE "courseRatings" DROP CONSTRAINT "courseRatings_courseId_fkey";

-- DropForeignKey
ALTER TABLE "orders" DROP CONSTRAINT "orders_userId_fkey";

-- DropForeignKey
ALTER TABLE "productComments" DROP CONSTRAINT "productComments_productId_fkey";

-- DropForeignKey
ALTER TABLE "productRatings" DROP CONSTRAINT "productRatings_productId_fkey";

-- AddForeignKey
ALTER TABLE "UsersOnCourses" ADD CONSTRAINT "UsersOnCourses_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UsersOnCourses" ADD CONSTRAINT "UsersOnCourses_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "courses"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "contents" ADD CONSTRAINT "contents_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "courses"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "courseComments" ADD CONSTRAINT "courseComments_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "courses"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "courseRatings" ADD CONSTRAINT "courseRatings_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "courses"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "productComments" ADD CONSTRAINT "productComments_productId_fkey" FOREIGN KEY ("productId") REFERENCES "products"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "productRatings" ADD CONSTRAINT "productRatings_productId_fkey" FOREIGN KEY ("productId") REFERENCES "products"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
