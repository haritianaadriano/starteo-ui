import { UserSignup } from '@/api';
import { Textarea } from '@/components/ui/textarea';
import { Button, TextField } from '@mui/material';
import { UseFormReturn } from 'react-hook-form';
import { Link } from 'react-router-dom';

interface Props {
  onPrevious(): void;
  form: UseFormReturn<UserSignup>;
}

export const SecondForm = ({ form, onPrevious }: Props) => {
  return (
    <>
      <TextField
        fullWidth
        type="password"
        autoComplete="current-password"
        error={!!form.formState.errors['password']?.message}
        label={form.formState.errors['password']?.message || 'Password'}
        {...form.register('password', { required: 'required value' })}
      />
      <TextField
        fullWidth
        error={!!form.formState.errors['career_path']?.message}
        label={form.formState.errors['career_path']?.message || 'Career Path'}
        {...form.register('career_path')}
      />
      <Textarea
        placeholder="Describe your self"
        {...form.register('description')}
      />

      <span className="flex-all-center gap-1">
        <span className="font-Montserrat text-center">
          already have an account ?&nbsp;
        </span>
        <Link
          to="/signin"
          className="font-Quicksand text-md font-bold hover:underline hover:text-blue-700"
        >
          Login
        </Link>
      </span>

      <div className="flex items-center justify-between">
        <Button variant="contained" type="button" onClick={onPrevious}>
          Previous
        </Button>

        <Button variant="contained" type="submit">
          Next
        </Button>
      </div>
    </>
  );
};
