import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/users.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async deleteAccount() {
    const user: User = new User();
    user.nickname = 'test';
    user.email = 'sdf@sf.com';
    user.password = '1234';
    await this.usersRepository.save(user);
  }
}
