import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/infra/prisma.service";
import { Veiculo } from "../entities/veiculo.entity";

@Injectable()
export class VeiculoRepository {
    constructor(private readonly prisma : PrismaService) {}

    async findAll(): Promise<Veiculo[]> {
        return await this.prisma.veiculo.findMany();
    }

    
    async getByUuid(uuid: string): Promise<Veiculo> {
        return await this.prisma.veiculo.findUnique({
            where: {
                uuid
            }
        });
    }

    async create(veiculo: Veiculo): Promise<Veiculo> {
        return await this.prisma.veiculo.create({
            data: veiculo
        });
    }

    async update(uuid: string, veiculo: Veiculo): Promise<Veiculo> {
        return await this.prisma.veiculo.update({
            where: {
                uuid
            },
            data: veiculo
        });
    }

    async delete(uuid: string): Promise<Veiculo> {
        return await this.prisma.veiculo.delete({
            where: {
                uuid
            }
        });
    }
}