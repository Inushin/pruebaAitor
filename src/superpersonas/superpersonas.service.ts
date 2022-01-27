import { Delete, Get, Injectable, Param, Post, Put } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Caracteristicas } from './caracteristicas';
import { CrearSuperpersonas } from './dto/crearsuperpersonas';
import { RemovePersonas } from './dto/removepersonas';
import { UpdatePersonas } from './dto/updatepersonas';

import { Superpersonas } from './superpersonas.entity';

@Injectable()
export class SuperpersonasService {

    constructor(@InjectRepository(Superpersonas) private superpersonasRepository: Repository<Superpersonas>) {}
    @Get()
    async findAll():Promise<Superpersonas[]>
    {
        return this.superpersonasRepository.find();
    }
    @Post('create')
    async create(superpersonas:CrearSuperpersonas):Promise<Superpersonas>
    {
        let sup=this.superpersonasRepository.create(superpersonas);
        return this.superpersonasRepository.save(sup);
    }

   @Put(':nombre/update')
    async update(nombre: string, ciudad_de_residencia:string) : Promise<Superpersonas> {
        let user = await this.findOne(nombre);
        //Ampliar para modificar todos los campos
        user.ciudad_de_residencia = ciudad_de_residencia;
        return this.superpersonasRepository.save(user);
    }
    
    async findOne(nombre:string):Promise<Superpersonas>
    {
        return this.superpersonasRepository.findOneOrFail(nombre);
    }

    @Delete(':nombre/delete')
    async remove(nombre: string) {
        await this.superpersonasRepository.delete(nombre);
    }
}
