-- CreateEnum
CREATE TYPE "TypeMeal" AS ENUM ('BROTHS', 'PROTEINS');

-- CreateTable
CREATE TABLE "meals" (
    "id" SERIAL NOT NULL,
    "type" "TypeMeal" NOT NULL DEFAULT 'BROTHS',
    "imageInactive" TEXT NOT NULL,
    "imageActive" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" INTEGER NOT NULL,

    CONSTRAINT "meals_pkey" PRIMARY KEY ("id")
);
