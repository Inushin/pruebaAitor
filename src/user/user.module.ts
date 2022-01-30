import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserPrueba } from './entities/user.entity';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';

@Module({
  imports:[TypeOrmModule.forFeature([UserPrueba])],
  providers: [UserService, UserResolver],
  controllers:[]
})
export class UserPruebaModule {}
