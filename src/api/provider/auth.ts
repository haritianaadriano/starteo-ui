import { AxiosInstance } from 'axios';
import { User, UserSignIn, UserSignInResponse, UserSignup } from '@/api';

export class AuthApi {
  //TODO: is it really necessary to create allways an instance of a provider class to access bearer
  // instead of just store it with zustand or session storage ?
  // private bearer: string = '';

  constructor(private client: AxiosInstance) {}

  getToken(): string | null {
    return sessionStorage.getItem('bearer');
  }

  async me(): Promise<{
    id: string;
    customization_option: Pick<User, 'customization_option'>;
    bearer: string;
  }> {
    return (
      await this.client.get('/auth/whoami', {
        headers: {
          Authorization: 'Bearer ' + sessionStorage.getItem('bearer'),
        },
      })
    ).data;
  }

  async signin(data: UserSignIn): Promise<UserSignInResponse> {
    const response: UserSignInResponse = (
      await this.client.post('/auth/signin', data)
    ).data;
    sessionStorage.setItem('bearer', response.token);
    return response;
  }

  async signup(data: UserSignup): Promise<User> {
    const response: User = (await this.client.post('/auth/signup', data)).data;
    await this.signin({ email: data.email, password: data.password });
    return response;
  }
}
