import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  UseInterceptors,
  UploadedFile
} from '@nestjs/common';
import { Inject } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';

import { IVeiculosService } from './service/Iveiculos.service';
import { veiculoRequestDto } from './dto/veiculo.request.dto';
import { VeiculoResponseDto } from './dto/veiculo.response.dto';

@Controller('veiculos')
export class VeiculosController {
  constructor(
    @Inject(IVeiculosService)
    private readonly veiculosService: IVeiculosService
  ) {}

  @Post()
  async create(@Body() data: veiculoRequestDto): Promise<VeiculoResponseDto> {
    return this.veiculosService.create(data);
  }

  @Get()
  async findAll(): Promise<VeiculoResponseDto[]> {
    return this.veiculosService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<VeiculoResponseDto> {
    return this.veiculosService.findOne(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() data: veiculoRequestDto
  ): Promise<VeiculoResponseDto> {
    return this.veiculosService.update(id, data);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<VeiculoResponseDto> {
    return this.veiculosService.remove(id);
  }

  @Post('upload')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, callback) => {
          const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
          const ext = extname(file.originalname);
          const filename = `${file.fieldname}-${uniqueSuffix}${ext}`;
          callback(null, filename);
        },
      }),
    })
  )
  async uploadDocumento(@UploadedFile() file: Express.Multer.File) {
    return {
      mensagem: 'Arquivo recebido com sucesso!',
      caminho: `/uploads/${file.filename}`,
    };
  }
}
