import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsuarioServiceImpl } from 'src/usuarios/service/implements/usuarios.service.impl';
import { PrismaService } from 'src/infra/prisma.service';

@Module({
  imports: [
    JwtModule.register({
      secret: 'segredo_supersecreto', // Troque por env depois
      signOptions: { expiresIn: '1d' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, UsuarioServiceImpl, PrismaService],
})
export class AuthModule {}
