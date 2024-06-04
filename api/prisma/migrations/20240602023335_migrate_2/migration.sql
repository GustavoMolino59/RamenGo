/*
  Warnings:

  - You are about to drop the `meals` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "meals";

-- DropEnum
DROP TYPE "TypeMeal";

-- CreateTable
CREATE TABLE "broths" (
    "id" SERIAL NOT NULL,
    "imageInactive" TEXT NOT NULL,
    "imageActive" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" INTEGER NOT NULL,

    CONSTRAINT "broths_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "proteins" (
    "id" SERIAL NOT NULL,
    "imageInactive" TEXT NOT NULL,
    "imageActive" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" INTEGER NOT NULL,

    CONSTRAINT "proteins_pkey" PRIMARY KEY ("id")
);
