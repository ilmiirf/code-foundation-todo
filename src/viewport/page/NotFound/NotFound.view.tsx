import { Button, Card, Typography } from '@material-tailwind/react';
import { type PageNotFoundProps } from './NotFound.type';

const View = ({ onBack }: PageNotFoundProps) => (
  <div className="flex items-center content-center justify-center h-screen">
    <Card className="w-full max-w-[32rem] px-4 py-8 m-0 text-center">
      <Typography variant="h4" color="black" className="mb-6">
        Page Not Found
      </Typography>
      <Button onClick={onBack}>Go Back</Button>
    </Card>
  </div>
);

export default View;
