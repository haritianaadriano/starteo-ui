import { User } from '@/api';
import { AxiosInstance } from 'axios';
import { AuthApi } from './auth';

export class UsersApi {
  constructor(
    private client: AxiosInstance,
    private authApi: AuthApi,
  ) {}

  async listUsers(page: number = 1, page_size: number = 10): Promise<User[]> {
    this.authApi.me();
    console.log(sessionStorage.getItem('bearer'));

    return (
      await this.client.get(`/users?page=${page}&page_size=${page_size}`, {
        headers: {
          Authorization: 'Bearer ' + sessionStorage.getItem('bearer'),
        },
      })
    ).data;
  }

  async getById(user_id: string): Promise<User> {
    this.authApi.me();
    console.log(sessionStorage.getItem('bearer'));

    return (
      await this.client.get(`/users/${user_id}`, {
        headers: {
          Authorization: 'Bearer ' + sessionStorage.getItem('bearer'),
        },
      })
    ).data;
  }
}
