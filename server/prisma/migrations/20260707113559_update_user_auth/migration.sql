/*
  Warnings:

  - The `rank` column on the `User` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `passwordHash` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Rank" AS ENUM ('BEGINNER', 'INTERMEDIATE', 'PRO', 'MASTER');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "passwordHash" TEXT NOT NULL,
DROP COLUMN "rank",
ADD COLUMN     "rank" "Rank" NOT NULL DEFAULT 'BEGINNER',
ALTER COLUMN "name" DROP NOT NULL;
