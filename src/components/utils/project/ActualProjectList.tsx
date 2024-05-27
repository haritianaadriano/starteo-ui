import { Project } from '@/api';
import { AuthApi } from '@/api/provider';
import { client } from '@/api/provider/axios.client';
import { ProjectsApi } from '@/api/provider/projects';
import Layout from '@/common/components/Layout';
import { useEffect, useState } from 'react';
import ProjectCaroussel from './ProjectCaroussel';
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

export default function ActualProjectList() {
  const authProvider = new AuthApi(client);
  const projectProvider = new ProjectsApi(client, authProvider);
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
      <div className="flex items-center justify-center">
        <h1 className="text-lg font-bold">Last project of the week</h1>
      </div>

      <div className="flex items-center justify-center mt-6">
        <Carousel className="w-80">
          <CarouselContent>
            {projects.map((project) => (
              <ProjectCaroussel items={project} />
            ))}
          </CarouselContent>

          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </Layout>
  );
}
