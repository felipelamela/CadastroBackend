import { Usuario } from 'src/usuario/usuario.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from 'typeorm';

@Entity()
export class Cliente {
  @PrimaryGeneratedColumn()
  @OneToOne(() => Usuario, (cliente) => cliente.idCliente)
  id: number;

  @Column()
  CNPJ: string;

  @Column({ length: 500 })
  nomeFantasia: string;

  @Column({ length: 500 })
  razaoSocial: string;

  @Column()
  CEP: string;

  @Column('text')
  endereco: string;

  @Column()
  numero: string;

  @Column()
  complemento?: string;

  @Column()
  bairro: string;

  @Column()
  cidade: string;

  @Column()
  UF: string;
}
