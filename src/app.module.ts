import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path/posix';
import { SuperpersonasModule } from './superpersonas/superpersonas.module';

@Module({
  imports: [GraphQLModule.forRoot({
    autoSchemaFile: join(process.cwd(),'src/schema.gql'),
  }),
  SuperpersonasModule,
  TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'aitor',
    password: 'aitor.123',
    database: 'superpersonas',
    entities: ["dist/**/*.entity{.ts,.js}"],
    synchronize: true,
  })],
  controllers: [],
  providers: [],
})
export class AppModule {}
