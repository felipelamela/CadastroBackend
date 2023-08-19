import { DataSource } from 'typeorm';
import { Cliente } from './cliente.entity';

export const ClienteProviders = [
  {
    provide: 'CLIENTE_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Cliente),
    inject: ['DB_CONNECTION'],
  },
];
