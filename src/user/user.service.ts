import { Injectable } from '@nestjs/common';
import {users} from '../moks/index'

@Injectable()
export class UserService {
    async getUsers() {
        return users
    }
}


