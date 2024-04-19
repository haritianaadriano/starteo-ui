export interface User {
  id: string;
  firstname: string;
  lastname: string;
  username: string;
  email: string;
  description: string;
  career_path: string;
  customization_option: 'PROFESSIONAL' | 'STUDENT';
}

export interface UserSignup extends Omit<User, 'id'>{
  password: string;
  birthdate: string;
}

export interface UserSignIn {
  email: string;
  password: string;
}

export interface UserSignInResponse {
  email: string;
  token: string;
}