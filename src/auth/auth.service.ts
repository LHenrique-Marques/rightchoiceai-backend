import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UsuarioServiceImpl } from 'src/usuarios/service/implements/usuarios.service.impl';
import { LoginUsuarioDto } from 'src/usuarios/dto/login-usuario.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly usuariosService: UsuarioServiceImpl,
    private readonly jwtService: JwtService,
  ) {}

  async login(data: LoginUsuarioDto) {
    const usuario = await this.usuariosService.buscarPorEmail(data.email);
    if (!usuario) throw new UnauthorizedException('Credenciais inválidas');

    const senhaValida = await bcrypt.compare(data.senha, usuario.senha);
    if (!senhaValida) throw new UnauthorizedException('Credenciais inválidas');

    const payload = { sub: usuario.id, email: usuario.email };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
