import { AxiosInstance } from 'axios';
import { CreateProject, Project } from '../types';
import { AuthApi } from './auth';

export class ProjectsApi {
  constructor(
    private client: AxiosInstance,
    private authApi: AuthApi,
  ) {}

  async getProjectById(projectId: string): Promise<Project> {
    this.authApi.me();
    return (
      await this.client.get(`/projects/${projectId}`, {
        headers: {
          Authorization: 'Bearer ' + sessionStorage.getItem('bearer'),
        },
      })
    ).data;
  }

  async getOwnProjects(
    page: number = 1,
    page_size: number = 10,
  ): Promise<Project[]> {
    this.authApi.me();
    let meId = sessionStorage.getItem('me');

    return (
      await this.client.get(
        `/users/${meId}/projects?page=${page}&page_size=${page_size}`,
        {
          headers: {
            Authorization: 'Bearer ' + sessionStorage.getItem('bearer'),
          },
        },
      )
    ).data;
  }

  async getProjects(
    page: number = 1,
    page_size: number = 10,
  ): Promise<Project[]> {
    this.authApi.me();

    return (
      await this.client.get(`/projects?page=${page}&page_size=${page_size}`, {
        headers: {
          Authorization: 'Bearer ' + sessionStorage.getItem('bearer'),
        },
      })
    ).data;
  }

  async createProject(data: CreateProject[]): Promise<Project[]> {
    this.authApi.me();
    const meId = sessionStorage.getItem('me');
    return (
      await this.client.put(`/users/${meId}/projects`, data, {
        headers: {
          Authorization: 'Bearer ' + sessionStorage.getItem('bearer'),
        },
      })
    ).data;
  }
}
