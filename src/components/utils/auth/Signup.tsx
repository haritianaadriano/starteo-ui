import Box from '@mui/material/Box';
import { FirstForm } from './FirstForm';
import { useForm } from 'react-hook-form';
import { UserSignup } from '@/api';
import { SecondForm } from './SecondForm';
import { EndForm } from './EndForm';
import { useState } from 'react';
import { AuthApi } from '@/api/provider';
import { client } from '@/api/provider/axios.client';
import Steps from '@/components/common/Steps';

export default function SignupStepper() {
  const form = useForm<UserSignup>();
  const [step, setStep] = useState<0 | 1 | 2>(0);

  const handleDone = async (data: UserSignup) => {
    try {
      console.log(data);
      const auth = new AuthApi(client);
      const res = await auth.signup(data);
      console.log(res);
    } catch (err) {}
  };

  const handleSubmitData = async (data: UserSignup) => {
    switch (step) {
      case 0:
        setStep(1);
        break;
      case 1:
        setStep(2);
        break;
      case 2:
        handleDone(data);
        break;
      default:
        setStep(0);
        break;
    }
  };

  const handlePrevious = () => {
    setStep((p) => (p - 1) as 0 | 1 | 2);
  };

  const GetStepForm = () => {
    switch (step) {
      case 0:
        return <FirstForm form={form} />;
      case 1:
        return <SecondForm form={form} onPrevious={handlePrevious} />;
      case 2:
        return <EndForm form={form} onPrevious={handlePrevious} />;
      default:
        return null;
    }
  };

  return (
    <Box className="w-full h-screen flex items-center justify-center bg-cyan-950">
      <form
        onSubmit={form.handleSubmit(handleSubmitData)}
        className="full-view py-5 flex flex-col gap-5 px-5"
      >
        <Steps
          index={step}
          steps={[
            'Describe your self',
            'Describe your passion and your profession',
            'Register',
          ]}
        />
        <div className="full-view flex flex-col gap-8 justify-center">
          <GetStepForm />
        </div>
      </form>
    </Box>
  );
}
