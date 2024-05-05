import { AxiosInstance } from 'axios';
import { Project } from '../types';
import { AuthApi } from './auth';

export class ProjectsApi {
  constructor(
    private client: AxiosInstance,
    private authApi: AuthApi,
  ) {}

  async getProjects(
    page: number = 1,
    page_size: number = 10,
  ): Promise<Project[]> {
    console.log(sessionStorage.getItem('bearer'));
    this.authApi.me();

    return (
      await this.client.get(`/projects?page=${page}&page_size=${page_size}`, {
        headers: {
          Authorization: 'Bearer ' + sessionStorage.getItem('bearer'),
        },
      })
    ).data;
  }

  async createProject() {}
}
