/*
  Warnings:

  - You are about to drop the `likes` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `likes` DROP FOREIGN KEY `customer_id_likes_fk`;

-- DropForeignKey
ALTER TABLE `likes` DROP FOREIGN KEY `product_id_likes_fk`;

-- AlterTable
ALTER TABLE `products` MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT;

-- DropTable
DROP TABLE `likes`;
