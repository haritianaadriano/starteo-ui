import { Stepper, Step, StepLabel } from '@mui/material';

interface Props {
  index: 0 | 1 | 2;
  steps: [string, string, string];
}

const Steps = ({ index, steps }: Props) => {
  return (
    <Stepper activeStep={index}>
      {steps.map((v) => (
        <Step key={v}>
          <StepLabel>{v}</StepLabel>
        </Step>
      ))}
    </Stepper>
  );
};
export default Steps;
