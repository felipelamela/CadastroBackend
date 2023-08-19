import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { UsuarioProviders } from './usuario.provides';
import { UsuarioService } from './usuario.service';
import { UsuarioController } from './usuario.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [UsuarioController],
  providers: [...UsuarioProviders, UsuarioService],
})
export class UsuarioModule {}
