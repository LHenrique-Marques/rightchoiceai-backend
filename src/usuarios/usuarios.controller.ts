import { Body, Controller, Post } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UsuarioServiceImpl } from './service/implements/usuarios.service.impl';

@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuarioServiceImpl) {}

  @Post()
  async criar(@Body() data: CreateUsuarioDto) {
    return this.usuariosService.criar(data);
  }
}
