import { Project } from '@/api';
import { client, localClient } from '@/api/provider/axios.client';
import { ProjectsApi } from '@/api/provider/projects';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
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
  }, []);

  return (
    <div>
      {projects.map((project) => (
        <Card>
          <CardHeader>
            <CardTitle>{project.title}</CardTitle>
            <CardDescription>{project.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <p>{project.creation_datetime.toLocaleString()}</p>
          </CardContent>
          <CardFooter>
            <p>{project.user.username}</p>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
