import { Card, Typography } from '@material-tailwind/react';

const View = ({ count }: { count: number }) => (
  <div className="flex items-center content-center justify-center h-screen">
    <Card className="w-full max-w-[32rem] px-4 py-8 m-0 text-center">
      <Typography variant="h5" color="black">
        Redirecting you to another page in {count} sec
      </Typography>
    </Card>
  </div>
);

export default View;
