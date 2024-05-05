import { User } from './user';

export interface Project {
  id: string;
  description: string;
  title: string;
  creation_datetime: Date;
  user: User;
  donation_collected: number;
}

export interface CreateProject {
  id: string;
  description: string;
  title: string;
  user_id: string;
}
