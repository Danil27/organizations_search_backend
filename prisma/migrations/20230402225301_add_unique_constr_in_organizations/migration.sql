/*
  Warnings:

  - A unique constraint covering the columns `[inn,name]` on the table `Organizations` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Organizations_inn_name_key" ON "Organizations"("inn", "name");
