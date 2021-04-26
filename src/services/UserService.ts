import { UsersRepository } from "../repositories/UsersRepository"
import { getCustomRepository, Repository } from "typeorm";
import { User } from "../entities/User";



class UsersService {
  private usersRepository: Repository<User>;

  constructor() {
    this.usersRepository = getCustomRepository(UsersRepository);
  }
  async create(email: string) {
    const user = this.usersRepository.create({
      email
    });

    await this.usersRepository.save(user);

    return user;
  }

  async findByEmail(email: string): Promise<User> {

    const user = await this.usersRepository.findOne({
      email
    });

    return user;
  }
}



export { UsersService }