// src/veiculos/entities/veiculo.entity.ts

import { Decimal } from "@prisma/client/runtime/library";

export class Veiculo {
  uuid: string;
  placa: string;
  marca: string;
  modelo: string;
  ano: number;
  cor: string;
  chassi: string;
  renavam: string;
  valor: Decimal;
  dataCadastro: Date;
  descricao: string;
}

