import { Delete, Injectable, Post, Put } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CrearSuperpersonas } from './dto/crearsuperpersonas';
import { RemovePersonas } from './dto/removepersonas';
import { UpdatePersonas } from './dto/updatepersonas';

import { Superpersonas } from './superpersonas.entity';

@Injectable()
export class SuperpersonasService {

    constructor(@InjectRepository(Superpersonas) private superpersonasRepository: Repository<Superpersonas>) {

    }


    async findAll():Promise<Superpersonas[]>
    {
        /*const superpersona = new Superpersonas();
        superpersona.nombre="Deku";
        superpersona.ciudad_de_residencia="";
        superpersona.caracteristicas;

        return[superpersona];
        */

        return this.superpersonasRepository.find();

    }
    @Post('create')
    async create(superpersonas:CrearSuperpersonas):Promise<Superpersonas>
    {
        let sup=this.superpersonasRepository.create(superpersonas);
        return this.superpersonasRepository.save(sup);
    }
/*
  //  @Put(':nombre/update')
    async update(updatepersonas:UpdatePersonas) {
        await this.superpersonasRepository.update(updatepersonas.nombre, updatepersonas);
    }
    */

    @Delete(':nombre/delete')
    async remove(nombre: string) {
        await this.superpersonasRepository.delete(nombre);
    }
}
