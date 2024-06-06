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
import CustomProjectCard from '@/components/common/CustomCard';
import CustomSearchBar from '@/components/common/CustomSearchBar';

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
      <div className="max-w-screen-xl mt-5 mx-auto p-5 sm:p-10 md:p-16 rounded bg-slate-300 border-slate-800">
        <CustomSearchBar />
        <div className="grid m-5 grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
          <CustomProjectCard />
        </div>
      </div>
    </Layout>
  );
}
