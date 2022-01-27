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

    @Mutation(() => Superpersonas, { name: "CrearSuperpersona" })
    create(@Args('superpersonasCreacion') superpersonas: CrearSuperpersonas) {
        return this.superpersonasService.create(superpersonas);
    }

/*
    @Mutation(() => Superpersonas, { name: "ActualizarSuperpersona" })
    update(@Args('actualizacionsuperpersona') superpersonas: UpdatePersonas) {
        return this.superpersonasService.update(superpersonas);
    }
    */
    

    @Mutation(() => Superpersonas, { name: "BorrarSuperpersona" })
    remove(@Args('eliminarsuperpersona') superpersonas: RemovePersonas) {
        return this.superpersonasService.remove(superpersonas.nombre);
    }
    
}
