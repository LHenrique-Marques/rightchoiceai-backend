import { CreateUsuarioDto } from '../dto/create-usuario.dto';
import { Usuario } from '../entities/usuario.entity';

export abstract class IUsuariosService {
  abstract criar(data: CreateUsuarioDto): Promise<Usuario>;
  abstract buscarPorEmail(email: string): Promise<Usuario | null>;
}
