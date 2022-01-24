import { Injectable } from '@nestjs/common';
import { Superpersonas } from './superpersonas.entity';

@Injectable()
export class SuperpersonasService {

    async findAll():Promise<Superpersonas[]>
    {
        const superpersona = new Superpersonas();
        superpersona.nombre="Deku";
        superpersona.ciudad_de_residencia="";
        superpersona.caracteristicas;
        
        return[superpersona];

    }
}
