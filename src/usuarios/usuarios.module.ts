import { Module } from '@nestjs/common';
import { UsuariosController } from './usuarios.controller';
import { UsuarioServiceImpl } from './service/implements/usuarios.service.impl';
import { PrismaService } from 'src/infra/prisma.service';

@Module({
  controllers: [UsuariosController],
  providers: [UsuarioServiceImpl, PrismaService],
  exports: [UsuarioServiceImpl],
})
export class UsuariosModule {}
