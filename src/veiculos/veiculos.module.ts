import { Module } from '@nestjs/common';
import { VeiculosController } from './veiculos.controller';
import { IVeiculosService } from './service/Iveiculos.service'; // Importação correta da interface
import { VeiculosService } from './service/implements/veiculo.service.impl'; // Importação da implementação
import { PrismaService } from 'src/infra/prisma.service';

@Module({
  controllers: [VeiculosController],
  providers: [
    {
      provide: IVeiculosService,
      useClass: VeiculosService, // Associando a implementação correta à interface
    },
    PrismaService,
  ],
  exports: [IVeiculosService],
})
export class VeiculosModule {}
