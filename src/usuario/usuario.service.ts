import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Usuario } from './usuario.entity';
import { CreateUsuarioDto } from './dto/CreateUsuario.dto';
import { ResponseDto } from 'src/statusdto/response.dto';
import { UpdateUsuarioDto } from './dto/UpdateUsuario.dto';

@Injectable()
export class UsuarioService {
  constructor(
    @Inject('USUARIO_REPOSITORY')
    private usuarioRepository: Repository<Usuario>,
  ) {}

  async listar(): Promise<Usuario[]> {
    return this.usuarioRepository.find();
  }
  async buscarID(id: number): Promise<Usuario | null> {
    return this.usuarioRepository.findOneBy({ id });
  }

  async atualizar(
    id: number,
    dadosParaAtualizar: UpdateUsuarioDto,
  ): Promise<ResponseDto> {
    return this.usuarioRepository
      .update(id, dadosParaAtualizar)
      .then((results) => {
        return <ResponseDto>{
          status: true,
          mensage: 'Usuário Atualizado!',
        };
      })
      .catch((error) => {
        return <ResponseDto>{
          status: false,
          mensage: `Houve um error - Error ${error}`,
        };
      });
  }

  async deletar(id: number): Promise<ResponseDto> {
    return this.usuarioRepository
      .delete(id)
      .then((results) => {
        return <ResponseDto>{
          status: true,
          mensage: 'Usuário Deletado!',
        };
      })
      .catch((error) => {
        return <ResponseDto>{
          status: false,
          mensage: `Houve um error - Error ${error}`,
        };
      });
  }

  async cadastrar(data: CreateUsuarioDto): Promise<ResponseDto> {
    const usuario = new Usuario();
    usuario.nome = data.nome;
    usuario.sobrenome = data.sobrenome;
    usuario.idCliente = data.idCliente;
    usuario.senha = data.senha;
    usuario.email = data.email;
    usuario.telefone = data.telefone;
    return this.usuarioRepository
      .save(usuario)
      .then((results) => {
        return <ResponseDto>{
          status: true,
          mensage: 'Usuário cadastrado!',
        };
      })
      .catch((error) => {
        return <ResponseDto>{
          status: false,
          mensage: `Houve um error - Error ${error}`,
        };
      });
  }
}
