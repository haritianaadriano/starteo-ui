import axios from 'axios';
import { AuthApi } from './provider';

export class Client {
  // public users: UsersApi;
  public auth: AuthApi;

  constructor() {
    const domain: string = import.meta.env['VITE_SERVER_DOMAIN']!;
    const client_instance = axios.create({
      baseURL: `https://${domain}`,
    });
    // this.users = new UsersApi(client_instance);
    this.auth = new AuthApi(client_instance);
  }
}
