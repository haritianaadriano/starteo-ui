import { Project } from '@/api';
import { client, localClient } from '@/api/provider/axios.client';
import { ProjectsApi } from '@/api/provider/projects';
import { useEffect, useState } from 'react';

export default function ProjectList() {
  const projectProvider = new ProjectsApi(client);
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await projectProvider.getProjects();
        setProjects(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  });

  return (
    <div>
      <h1>Hello</h1>
      {projects.map((project) => (
        <div>{project.title}</div>
      ))}
    </div>
  );
}
