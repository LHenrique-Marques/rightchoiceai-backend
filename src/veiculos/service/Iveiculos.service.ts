import { veiculoRequestDto } from '../dto/veiculo.request.dto';
import { VeiculoResponseDto } from '../dto/veiculo.response.dto';

export abstract class IVeiculosService {
  abstract create(data: veiculoRequestDto): Promise<VeiculoResponseDto>;
  abstract findAll(): Promise<VeiculoResponseDto[]>;
  abstract findOne(id: string): Promise<VeiculoResponseDto>;
  abstract update(id: string, data: veiculoRequestDto): Promise<VeiculoResponseDto>;
  abstract remove(id: string): Promise<VeiculoResponseDto>;
}
