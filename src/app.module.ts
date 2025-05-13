import { Module } from '@nestjs/common';
import { UsuariosModule } from './usuarios/usuarios.module';
import { AuthModule } from './auth/auth.module';
import { VeiculosModule } from './veiculos/veiculos.module';
import { IaModule } from './ia/ia.module';

@Module({
  imports: [
    UsuariosModule,
    AuthModule,
    VeiculosModule,
    IaModule,
  ],
})
export class AppModule {}
