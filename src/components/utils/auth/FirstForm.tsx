import { UserSignup } from '@/api';
import { Button, TextField } from '@mui/material';
import { UseFormReturn } from 'react-hook-form';
import { Link } from 'react-router-dom';

interface Props {
  form: UseFormReturn<UserSignup>;
}

export const FirstForm = ({ form }: Props) => {
  return (
    <>
      <TextField
        fullWidth
        error={!!form.formState.errors['lastname']?.message}
        label={form.formState.errors['lastname']?.message || 'Lastname'}
        {...form.register('lastname', { required: 'required value' })}
      />
      <TextField
        fullWidth
        error={!!form.formState.errors['firstname']?.message}
        label={form.formState.errors['firstname']?.message || 'Firstname'}
        {...form.register('firstname', { required: 'required value' })}
      />

      <TextField
        fullWidth
        error={!!form.formState.errors['email']?.message}
        label={form.formState.errors['email']?.message || 'Email'}
        {...form.register('email', { required: 'required value' })}
      />

      <TextField
        fullWidth
        error={!!form.formState.errors['username']?.message}
        label={form.formState.errors['username']?.message || 'Username'}
        {...form.register('username')}
      />

      <div className="flex items-center justify-between">
        <Button variant="contained" type="submit">
          Next
        </Button>

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
      </div>
    </>
  );
};
