import { Project } from '@/api';
import { client, localClient } from '@/api/provider/axios.client';
import { ProjectsApi } from '@/api/provider/projects';
import Layout from '@/common/components/Layout';
import { formatDate } from '@/common/utils/date';
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
    <Layout>
      <div className="w-full h-screen flex items-center justify-center">
        {projects.map((project) => (
          <Card className="bg-slate-300">
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
              <CardDescription>
                collected: {project.donation_collected}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>{formatDate('' + project.creation_datetime)}</p>
            </CardContent>
            <CardFooter>
              <p>{project.user.username}</p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </Layout>
  );
}
