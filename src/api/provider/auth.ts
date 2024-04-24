import { AxiosInstance } from 'axios';
import { User, UserSignIn, UserSignInResponse, UserSignup } from '@/api';

export class Auth {
  private bearer: string = '';

  constructor(private client: AxiosInstance) {}

  getToken(): string {
    return this.bearer;
  }

  async me(): Promise<{
    id: Pick<User, 'id'>;
    customization_option: Pick<User, 'customization_option'>;
    bearer: string;
  }> {
    return (
      await this.client.get('/auth/whoami', {
        headers: {
          Authorization: this.bearer,
        },
      })
    ).data;
  }

  async sign_in(data: UserSignIn): Promise<UserSignInResponse> {
    const response: UserSignInResponse = (
      await this.client.post('/auth/signin', data)
    ).data;
    this.bearer = response.token;
    return response;
  }

  async signup(data: UserSignup): Promise<User> {
    const response: User = (await this.client.post('/auth/signup', data)).data;
    await this.sign_in({ email: data.email, password: data.password });
    return response;
  }
}
