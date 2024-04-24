import axios from 'axios';
import { Auth, Users } from './provider';

export class Client {
  public users: Users;
  public auth: Auth;

  constructor() {
    const domain: string = import.meta.env['VITE_SERVER_DOMAIN']!;
    const client_instance = axios.create({
      baseURL: `https://${domain}`,
    });
    this.users = new Users(client_instance);
    this.auth = new Auth(client_instance);
  }
}
