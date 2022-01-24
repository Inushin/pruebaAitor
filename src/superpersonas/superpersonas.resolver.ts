import { Query, Resolver } from '@nestjs/graphql';
import { Superpersonas } from './superpersonas.entity';
import { SuperpersonasService } from './superpersonas.service';

@Resolver(of => Superpersonas)
export class SuperpersonasResolver {
    constructor(private superpersonasService: SuperpersonasService) {}

    @Query(returns => [Superpersonas])
    superpersonas(): Promise<Superpersonas[]>
    {
        return this.superpersonasService.findAll();
    }
}
