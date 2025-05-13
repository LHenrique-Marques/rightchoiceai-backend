import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/infra/prisma.service';
import { IUsuariosService } from '../Iusuarios.service';
import { CreateUsuarioDto } from '../../dto/create-usuario.dto';
import { Usuario } from '../../entities/usuario.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsuarioServiceImpl implements IUsuariosService {
  constructor(private readonly prisma: PrismaService) {}

  async criar(data: CreateUsuarioDto): Promise<Usuario> {
    const senhaCriptografada = await bcrypt.hash(data.senha, 10);

    const usuarioCriado = await this.prisma.usuario.create({
      data: {
        nome: data.nome,
        email: data.email,
        senha: senhaCriptografada,
      },
    });

    const { senha, ...usuarioSemSenha } = usuarioCriado;
    return usuarioSemSenha as Usuario;
  }

  async buscarPorEmail(email: string): Promise<Usuario | null> {
    return this.prisma.usuario.findUnique({
      where: { email },
    });
  }
}
