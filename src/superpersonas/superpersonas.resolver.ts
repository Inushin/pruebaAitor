import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CrearSuperpersonas } from './dto/crearsuperpersonas';
import { RemovePersonas } from './dto/removepersonas';
import { UpdatePersonas } from './dto/updatepersonas';
import { Superpersonas } from './superpersonas.entity';
import { SuperpersonasService } from './superpersonas.service';

@Resolver(of => Superpersonas)
export class SuperpersonasResolver {
    constructor(private superpersonasService: SuperpersonasService) { }

    @Query(returns => [Superpersonas])
    superpersonas(): Promise<Superpersonas[]> {
        return this.superpersonasService.findAll();
    }

    @Query(returns => Superpersonas)
    getSuperpersona(@Args('nombre') nombre:string):Promise<Superpersonas>
    {
        return this.superpersonasService.findOne(nombre);
    }

    @Mutation(() => Superpersonas, { name: "CrearSuperpersona" })
    create(@Args('superpersonasCreacion') superpersonas: CrearSuperpersonas):Promise<Superpersonas> {
        return this.superpersonasService.create(superpersonas);
    }


    @Mutation(() => Superpersonas, { name: "ActualizarSuperpersona" })
    update(@Args('actualizacionsuperpersona') superpersonas: UpdatePersonas) {
        return this.superpersonasService.update(superpersonas.nombre, superpersonas.ciudad_de_residencia, superpersonas.caracteristicas.fuerza, superpersonas.caracteristicas.inteligencia, superpersonas.caracteristicas.salud, superpersonas.caracteristicas.tipos, superpersonas.caracteristicas.activo);
    }
    
    

    @Mutation(() => Superpersonas, { name: "BorrarSuperpersona" })
    remove(@Args('eliminarsuperpersona') superpersonas: RemovePersonas) {
        return this.superpersonasService.remove(superpersonas.nombre);
    }
    
}
