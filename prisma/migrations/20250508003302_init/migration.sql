-- CreateTable
CREATE TABLE `veiculo` (
    `uuid` VARCHAR(191) NOT NULL,
    `placa` CHAR(7) NOT NULL,
    `marca` CHAR(20) NOT NULL,
    `modelo` CHAR(20) NOT NULL,
    `ano` INTEGER NOT NULL,
    `cor` CHAR(20) NOT NULL,
    `chassi` CHAR(17) NOT NULL,
    `renavam` CHAR(11) NOT NULL,
    `valor` DECIMAL(65, 30) NOT NULL,
    `dataCadastro` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `descricao` CHAR(255) NOT NULL,

    UNIQUE INDEX `veiculo_placa_key`(`placa`),
    UNIQUE INDEX `veiculo_chassi_key`(`chassi`),
    UNIQUE INDEX `veiculo_renavam_key`(`renavam`),
    PRIMARY KEY (`uuid`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `request` (
    `uuid` VARCHAR(191) NOT NULL,
    `request` CHAR(120) NOT NULL,

    UNIQUE INDEX `request_request_key`(`request`),
    PRIMARY KEY (`uuid`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `documento` (
    `uuid` VARCHAR(191) NOT NULL,
    `veiculoId` VARCHAR(191) NOT NULL,
    `numero` INTEGER NOT NULL,
    `data_emissao` DATETIME(3) NOT NULL,
    `data_vencimento` DATETIME(3) NOT NULL,
    `dataCadastro` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`uuid`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `images_path` (
    `uuid` VARCHAR(191) NOT NULL,
    `veiculoId` VARCHAR(191) NOT NULL,
    `path` CHAR(255) NOT NULL,
    `descricao` CHAR(255) NOT NULL,
    `dataCadastro` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`uuid`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `documento` ADD CONSTRAINT `documento_veiculoId_fkey` FOREIGN KEY (`veiculoId`) REFERENCES `veiculo`(`uuid`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `images_path` ADD CONSTRAINT `images_path_veiculoId_fkey` FOREIGN KEY (`veiculoId`) REFERENCES `veiculo`(`uuid`) ON DELETE RESTRICT ON UPDATE CASCADE;
