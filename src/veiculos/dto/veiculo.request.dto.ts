import { IsString, IsInt, IsDecimal, IsDate, IsOptional } from 'class-validator';

export class veiculoRequestDto {
  @IsString()
  placa: string;

  @IsString()
  marca: string;

  @IsString()
  modelo: string;

  @IsInt()
  ano: number;

  @IsString()
  cor: string;

  @IsString()
  chassi: string;

  @IsString()
  renavam: string;

  @IsDecimal()
  valor: number;

  @IsDate()
  @IsOptional()
  dataCadastro?: Date;

  @IsString()
  descricao: string;
}
