import { Body, Controller, Post } from '@nestjs/common';

@Controller('ia')
export class IaController {
  @Post('sugerir')
  async sugerirVeiculo(@Body() dados: any) {
    // Aqui será feita a chamada para o serviço externo da IA futuramente
    console.log('Dados recebidos para IA:', dados);

    return {
      mensagem: 'Solicitação recebida. A IA irá processar isso futuramente.',
      dadosRecebidos: dados,
    };
  }
}
