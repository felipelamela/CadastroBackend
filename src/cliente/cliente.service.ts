import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Cliente } from './cliente.entity';
import { CreateClienteDto } from './dto/CreateCliente.dto';
import { ResponseDto } from 'src/statusdto/response.dto';
import { UpdateClienteDto } from './dto/UpdateCliente.dto';

@Injectable()
export class ClienteService {
  constructor(
    @Inject('CLIENTE_REPOSITORY')
    private clienteRepository: Repository<Cliente>,
  ) {}

  async listar(): Promise<Cliente[]> {
    return this.clienteRepository.find();
  }

  async buscarId(id: number): Promise<Cliente | null> {
    return this.clienteRepository.findOneBy({ id });
  }

  async atualizar(
    id: number,
    dadosParaAtualizar: UpdateClienteDto,
  ): Promise<ResponseDto> {
    return this.clienteRepository
      .update(id, dadosParaAtualizar)
      .then((results) => {
        return <ResponseDto>{
          status: true,
          mensage: 'Cliente Deletado!',
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
    return this.clienteRepository
      .delete(id)
      .then((results) => {
        return <ResponseDto>{
          status: true,
          mensage: 'Cliente Deletado!',
        };
      })
      .catch((error) => {
        return <ResponseDto>{
          status: false,
          mensage: `Houve um error - Error ${error}`,
        };
      });
  }

  async cadastrar(data: CreateClienteDto): Promise<ResponseDto> {
    const cliente = new Cliente();
    cliente.CNPJ = data.cnpj;
    cliente.nomeFantasia = data.nomeFantasia;
    cliente.razaoSocial = data.razaoSocial;
    cliente.CEP = data.cep;
    cliente.endereco = data.endereco;
    cliente.numero = data.numero;
    cliente.complemento = data.complemento;
    cliente.bairro = data.bairro;
    cliente.cidade = data.cidade;
    cliente.UF = data.uf;
    return this.clienteRepository
      .save(cliente)
      .then((results) => {
        return <ResponseDto>{
          status: true,
          valor: cliente.id,
          mensage: 'Cliente cadastrado!',
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
