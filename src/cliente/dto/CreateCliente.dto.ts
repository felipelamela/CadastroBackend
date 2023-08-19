export class CreateClienteDto {
  cnpj: string;
  nomeFantasia: string;
  razaoSocial: string;
  cep: string;
  endereco: string;
  numero: string;
  complemento?: string;
  bairro: string;
  cidade: string;
  uf: string;
}
