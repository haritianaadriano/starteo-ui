import { AxiosInstance } from 'axios';
import { Project } from '../types';

export class ProjectsApi {
  constructor(private client: AxiosInstance) {}

  async getProjects(
    page: number = 1,
    page_size: number = 10,
  ): Promise<Project[]> {
    console.log(sessionStorage.getItem('bearer'));

    return (
      await this.client.get(`/projects?page=${page}&page_size=${page_size}`, {
        headers: {
          Authorization: 'Bearer ' + sessionStorage.getItem('bearer'),
        },
      })
    ).data;
  }
}
