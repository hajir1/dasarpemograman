-- CreateTable
CREATE TABLE `adress` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `street` VARCHAR(100) NULL,
    `city` VARCHAR(100) NULL,
    `province` VARCHAR(100) NULL,
    `country` VARCHAR(100) NULL,
    `postal_name` VARCHAR(100) NULL,
    `contact_id` INTEGER NULL,

    INDEX `contact_id_adress_fk`(`contact_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `adress` ADD CONSTRAINT `contact_id_adress_fk` FOREIGN KEY (`contact_id`) REFERENCES `contacts`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
