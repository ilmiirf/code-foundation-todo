import { Card, Input, Button, Typography } from '@material-tailwind/react';
import './Login.css';
import { type LoginInterface } from './Login.types';

const View = ({
  username,
  password,
  handleChange,
  handleLogin,
}: LoginInterface) => {
  return (
    <div className="login-container">
      <Card color="white" shadow={true} className="p-8">
        <Typography variant="h4" color="blue-gray">
          Login
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Please fill in your registered email below
        </Typography>
        <form className="max-w-screen-lg mt-8 mb-2 w-80 sm:w-96">
          <div className="flex flex-col gap-6 mb-1">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Your Username
            </Typography>
            <Input
              size="lg"
              placeholder=""
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: 'before:content-none after:content-none',
              }}
              name="username"
              value={username}
              onChange={handleChange}
              crossOrigin={undefined}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Password
            </Typography>
            <Input
              type="password"
              size="lg"
              placeholder="********"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: 'before:content-none after:content-none',
              }}
              name="password"
              value={password}
              onChange={handleChange}
              crossOrigin={undefined}
              autoComplete="on"
            />
          </div>
          <Button
            className="mt-6"
            fullWidth
            onClick={handleLogin}
            placeholder={undefined}
            data-test="login button"
          >
            Login
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default View;
