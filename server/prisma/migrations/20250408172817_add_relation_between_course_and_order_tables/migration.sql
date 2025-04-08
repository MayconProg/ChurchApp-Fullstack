-- CreateTable
CREATE TABLE "_CourseToOrder" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_CourseToOrder_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_CourseToOrder_B_index" ON "_CourseToOrder"("B");

-- AddForeignKey
ALTER TABLE "_CourseToOrder" ADD CONSTRAINT "_CourseToOrder_A_fkey" FOREIGN KEY ("A") REFERENCES "courses"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CourseToOrder" ADD CONSTRAINT "_CourseToOrder_B_fkey" FOREIGN KEY ("B") REFERENCES "orders"("id") ON DELETE CASCADE ON UPDATE CASCADE;
