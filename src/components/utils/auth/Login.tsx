import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { AuthApi } from '@/api/provider';
import { client } from '@/api/provider/axios.client';
import { Link, useNavigate } from 'react-router-dom';
import IMAGES from '@/images/images';

const signinSchema = z.object({
  email: z.string(),
  password: z.string(),
});

export default function Login() {
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof signinSchema>>({
    resolver: zodResolver(signinSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  async function onSubmit(values: z.infer<typeof signinSchema>) {
    const request = new AuthApi(client);
    request.signin(values);
    const me = await request.me();
    sessionStorage.setItem('me', me.id);
    navigate('/');
  }

  return (
    <div className="w-full h-screen flex items-center justify-center bg-cyan-950">
      <Card className="max-w-sm m-10">
        <img className="h-fit w-fit" src={IMAGES.loginImage} alt="" />
      </Card>
      <Card className="max-w-sm">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold">Login</CardTitle>
          <CardDescription>
            Enter your email and password to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="email@gmail.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input placeholder="****" type="password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Signin</Button>
            </form>
          </Form>

          <span className="flex-all-center gap-1">
            <span className="font-Montserrat text-center">
              Create an account ?&nbsp;
            </span>
            <Link
              to="/signup"
              className="font-Quicksand text-md font-bold hover:underline hover:text-blue-700"
            >
              Signup
            </Link>
          </span>
        </CardContent>
      </Card>
    </div>
  );
}
