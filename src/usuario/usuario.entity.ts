import { Cliente } from 'src/cliente/cliente.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from 'typeorm';

@Entity()
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @OneToOne(() => Cliente, (user) => user.id)
  idCliente?: string;

  @Column({ length: 30 })
  nome: string;

  @Column({ length: 30 })
  sobrenome: string;

  @Column({ length: 255 })
  email: string;

  @Column({ length: 11 })
  telefone: string;

  @Column({ length: 255 })
  senha: string;
}
