import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { Cliente } from './cliente.entity';
import { CreateClienteDto } from './dto/CreateCliente.dto';
import { ResponseDto } from 'src/statusdto/response.dto';
import { UpdateClienteDto } from './dto/UpdateCliente.dto';

@Controller('/cliente')
export class ClienteController {
  constructor(private clienteService: ClienteService) {}

  @Get()
  async listar(): Promise<Cliente[]> {
    return this.clienteService.listar();
  }
  @Get('/:id')
  async buscarID(@Param('id') id: number): Promise<Cliente> {
    return this.clienteService.buscarId(id);
  }

  @Post()
  async cadastrar(@Body() data: CreateClienteDto): Promise<ResponseDto> {
    return this.clienteService.cadastrar(data);
  }

  @Put('/:id')
  async atualizar(
    @Param('id') id: number,
    @Body() dadosParaAtualizar: UpdateClienteDto,
  ): Promise<ResponseDto> {
    return this.clienteService.atualizar(id, dadosParaAtualizar);
  }

  @Delete('/:id')
  async deletar(@Param('id') id: number): Promise<ResponseDto> {
    return this.clienteService.deletar(id);
  }
}
