-- CreateTable
CREATE TABLE "Organizations" (
    "id" SERIAL NOT NULL,
    "inn" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Organizations_pkey" PRIMARY KEY ("id")
);
