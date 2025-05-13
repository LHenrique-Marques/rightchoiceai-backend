import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from 'src/infra/prisma.service';
import { IVeiculosService } from '../Iveiculos.service';
import { veiculoRequestDto } from '../../dto/veiculo.request.dto';
import { VeiculoResponseDto } from '../../dto/veiculo.response.dto';

@Injectable()
export class VeiculosService implements IVeiculosService {
  constructor(private readonly prisma: PrismaService) {}

  // Validação simples para garantir que todos os campos obrigatórios estão presentes
  private validateVeiculoData(data: veiculoRequestDto): void {
    if (!data.placa || !data.marca || !data.modelo || !data.ano || !data.cor || !data.chassi || !data.renavam || !data.valor || !data.descricao) {
      throw new BadRequestException('Todos os campos obrigatórios devem ser preenchidos.');
    }
  }

  async create(data: veiculoRequestDto): Promise<VeiculoResponseDto> {
    this.validateVeiculoData(data); // Validação dos dados

    const veiculo = await this.prisma.veiculo.create({
      data: { ...data },
    });
    return new VeiculoResponseDto(veiculo);
  }

  async findAll(): Promise<VeiculoResponseDto[]> {
    const veiculos = await this.prisma.veiculo.findMany();
    return veiculos.map((veiculo) => new VeiculoResponseDto(veiculo));
  }

  async findOne(id: string): Promise<VeiculoResponseDto> {
    const veiculo = await this.prisma.veiculo.findUnique({ where: { uuid: id } });
    if (!veiculo) {
      throw new NotFoundException(`Veículo com ID ${id} não encontrado.`);
    }
    return new VeiculoResponseDto(veiculo);
  }

  async update(id: string, data: veiculoRequestDto): Promise<VeiculoResponseDto> {
    this.validateVeiculoData(data); // Validação dos dados

    const veiculo = await this.prisma.veiculo.update({ where: { uuid: id }, data });
    return new VeiculoResponseDto(veiculo);
  }

  async remove(id: string): Promise<VeiculoResponseDto> {
    const veiculo = await this.prisma.veiculo.delete({ where: { uuid: id } });
    return new VeiculoResponseDto(veiculo);
  }
}
