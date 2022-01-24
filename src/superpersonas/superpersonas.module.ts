import { Module } from '@nestjs/common';
import { SuperpersonasService } from './superpersonas.service';
import { SuperpersonasResolver } from './superpersonas.resolver';

@Module({
  providers: [SuperpersonasService, SuperpersonasResolver]
})
export class SuperpersonasModule {}
