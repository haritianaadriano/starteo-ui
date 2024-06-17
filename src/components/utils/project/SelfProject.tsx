import { Project } from '@/api';
import { AuthApi } from '@/api/provider';
import { client } from '@/api/provider/axios.client';
import { ProjectsApi } from '@/api/provider/projects';
import Layout from '@/common/components/Layout';
import { formatDate } from '@/common/utils/date';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function SelfProject() {
  let { projectid } = useParams();
  const authProvider = new AuthApi(client);
  const projectProvider = new ProjectsApi(client, authProvider);
  const [project, setProject] = useState<Project>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await projectProvider.getProjectById(projectid!);
        setProject(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <Layout>
      <div className="max-w-screen-xl mt-5 mx-auto p-5 sm:p-10 md:p-16 rounded bg-slate-300 border-slate-800">
        <div className="m-5">
          <div>
            <h1 className="text-lg font-bold">{project?.title}</h1>
          </div>
          <div className="mb-5">
            <p>{project?.description}</p>
          </div>
          <div>
            <h3 className="font-bold">
              total collected: {project?.donation_collected}
            </h3>
          </div>
          <div>
            <h3 className="font-bold">
              author: {project?.user?.firstname + ' ' + project?.user?.lastname}
            </h3>
          </div>
          <div>
            <h3 className="font-bold">
              created at: {formatDate('' + project?.creation_datetime)}
            </h3>
          </div>
        </div>
      </div>
    </Layout>
  );
}
