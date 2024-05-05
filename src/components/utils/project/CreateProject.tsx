import { AuthApi } from '@/api/provider';
import { client } from '@/api/provider/axios.client';
import { ProjectsApi } from '@/api/provider/projects';
import Layout from '@/common/components/Layout';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';

const createProjectSchemas = z.object({
  id: z.string(),
  description: z.string(),
  title: z.string(),
  user_id: z.string(),
});

export default function CreateProject() {
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof createProjectSchemas>>({
    resolver: zodResolver(createProjectSchemas),
    defaultValues: {
      id: '',
      description: '',
      title: '',
      user_id: sessionStorage.getItem('me')!,
    },
  });

  async function onSubmit(values: z.infer<typeof createProjectSchemas>) {
    const tokenProvider = new AuthApi(client);
    const request = new ProjectsApi(client, tokenProvider);
    request.createProject([values]);
    const me = await tokenProvider.me();
    sessionStorage.setItem('me', me.id);
    navigate('/');
  }

  return (
    <Layout>
      <div className="w-full h-screen flex items-center justify-center">
        <Card className="max-w-sm">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold">
              Create a new project
            </CardTitle>
            <CardDescription>
              Innovate the world with your ideas
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-1xl font-bold">
                        Title
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="Project" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Description</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="describe your project"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit">Create your project</Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
