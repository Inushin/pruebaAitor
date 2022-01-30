import { Delete, Get, Injectable, Param, Post, Put } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CrearUsuario } from './dto/crearusuario';
import { UserPrueba } from './entities/user.entity';

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(UserPrueba) private userRepository: Repository<UserPrueba>
    ) { }

    @Get()
    async findAll(): Promise<UserPrueba[]> {
        return this.userRepository.find();
    }

    @Post('user/registro')
    async create(user: CrearUsuario): Promise<UserPrueba> {
        let usuario = this.userRepository.create(user);
        return this.userRepository.save(usuario);
    }

    /*
    @Post('user/login')
    async findOne(condition:any):Promise<UserPrueba>
    {
        return this.userRepository.findOneOrFail(condition);
    }
    */
}
