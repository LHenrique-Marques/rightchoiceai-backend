// src/veiculos/dto/veiculo.response.dto.ts

export class VeiculoResponseDto {
    uuid: string;
    placa: string;
    marca: string;
    modelo: string;
    ano: number;
    cor: string;
    chassi: string;
    renavam: string;
    valor: number;
    dataCadastro: Date;
    descricao: string;
  
    constructor(veiculo: any) {
      this.uuid = veiculo.uuid;
      this.placa = veiculo.placa;
      this.marca = veiculo.marca;
      this.modelo = veiculo.modelo;
      this.ano = veiculo.ano;
      this.cor = veiculo.cor;
      this.chassi = veiculo.chassi;
      this.renavam = veiculo.renavam;
      this.valor = Number(veiculo.valor);
      this.dataCadastro = veiculo.dataCadastro;
      this.descricao = veiculo.descricao;
    }
  }
  