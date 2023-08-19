import { Module } from '@nestjs/common';
import { UsuarioModule } from './usuario/usuario.module';
import { ClienteModule } from './cliente/cliente.module';

@Module({
  imports: [UsuarioModule, ClienteModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
