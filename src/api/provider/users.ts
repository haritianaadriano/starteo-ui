import { User } from '@/api';
import { AxiosInstance } from 'axios';

export class Users {
  constructor(
    private client: AxiosInstance
  ) {}

  async listUsers(page: number = 1, page_size: number = 20): Promise<User[]> {
    return (await this.client.get(`/users?page=${page}&page_size=${page_size}`)).data;
  }

  async getById(user_id: string): Promise<User> {
    return (await this.client.get(`/users/${user_id}`)).data;
  }
}