import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {

  private users: User[];
  private logger = new Logger("UserService");

  constructor() {
    this.users = [];
  }

  create(createUserDto: CreateUserDto) {
    const newUser = {
      id: this.users.length + 1,
      ...createUserDto
    };
    this.users.push(newUser);

    return this.users;
  }

  findAll() {
    
    return this.users;
  }

  findOne(id: number) {
    this.logger.debug(`ID: ${id}`);
    const user = this.users.find(user => user.id === id);
    if(!user) throw new NotFoundException(`Usuario con el id ${id} no encontrado`);
    return user;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
