import { Module } from '@nestjs/common';
import { SuperpersonasService } from './superpersonas.service';
import { SuperpersonasResolver } from './superpersonas.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Superpersonas } from './superpersonas.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Superpersonas])],
  providers: [SuperpersonasService, SuperpersonasResolver]
})
export class SuperpersonasModule {}
