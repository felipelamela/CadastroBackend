import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { Usuario } from './usuario.entity';
import { CreateUsuarioDto } from './dto/CreateUsuario.dto';
import { ResponseDto } from 'src/statusdto/response.dto';
import { UpdateUsuarioDto } from './dto/UpdateUsuario.dto';

@Controller('/usuario')
export class UsuarioController {
  constructor(private usuarioService: UsuarioService) {}

  @Get()
  async listar(): Promise<Usuario[]> {
    return this.usuarioService.listar();
  }
  
  @Get('/:id')
  async buscarID(@Param('id') id: number): Promise<Usuario> {
    return this.usuarioService.buscarID(id);
  }

  @Post()
  async cadastrar(@Body() data: CreateUsuarioDto): Promise<ResponseDto> {
    return this.usuarioService.cadastrar(data);
  }

  @Put('/:id')
  async atualizar(
    @Param('id') id: number,
    @Body() dadosParaAtualizar: UpdateUsuarioDto,
  ): Promise<ResponseDto> {
    return this.usuarioService.atualizar(id, dadosParaAtualizar);
  }

  @Delete('/:id')
  async deletar(@Param('id') id: number): Promise<ResponseDto> {
    return this.usuarioService.deletar(id);
  }
}
