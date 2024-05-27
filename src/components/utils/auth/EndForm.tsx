import { UserSignup } from '@/api';
import { Button } from '@mui/material';
import { UseFormReturn } from 'react-hook-form';
import { DatePicker } from '@mui/x-date-pickers';

interface Props {
  onPrevious(): void;
  form: UseFormReturn<UserSignup>;
}

export const EndForm = ({ form, onPrevious }: Props) => {
  const firstname: string = (form?.getValues('firstname') as string) || '';
  const lastname: string = (form?.getValues('lastname') as string) || '';

  return (
    <div>
      <div>
        <p className="font-Montserrat font-bold text-lg">{lastname}</p>
        <p className="font-Quicksand font-semibold text-md">{firstname}</p>
      </div>

      <DatePicker label="Tell we your birthday" />

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
