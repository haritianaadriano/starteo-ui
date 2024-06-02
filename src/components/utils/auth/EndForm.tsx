import { UserSignup } from '@/api';
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material';
import { UseFormReturn } from 'react-hook-form';

interface Props {
  onPrevious(): void;
  form: UseFormReturn<UserSignup>;
}

export const EndForm = ({ form, onPrevious }: Props) => {
  const firstname: string = (form?.getValues('firstname') as string) || '';
  const lastname: string = (form?.getValues('lastname') as string) || '';

  return (
    <div>
      <div className="m-5">
        <p className="font-Montserrat font-bold text-lg">{lastname}</p>
        <p className="font-Quicksand font-semibold text-md">{firstname}</p>
      </div>

      <div className="m-5">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Phone number
        </label>
        <input
          type="tel"
          id="phone"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
          {...form.register('phone_number')}
        />
      </div>

      <div className="m-5">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Birthdate
        </label>
        <input
          type="date"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
          {...form.register('birthdate', { valueAsDate: true })}
        />
      </div>

      <FormControl fullWidth className="m-5">
        <InputLabel id="demo-simple-select-label">Your career path</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Age"
          {...form.register('customization_option')}
        >
          <MenuItem value={'PROFESSIONAL'}>Professional</MenuItem>
          <MenuItem value={'STUDENT'}>Student</MenuItem>
        </Select>
      </FormControl>

      <div className="flex items-center justify-between">
        <Button type="button" variant="contained" onClick={onPrevious}>
          Previous
        </Button>

        <Button type="submit" variant="outlined">
          Done
        </Button>
      </div>
    </div>
  );
};
