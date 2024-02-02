import { Card, Input, Button, Typography } from '@material-tailwind/react';
import './Login.css';
import { type LoginProps } from './Login.type';
import { withTranslation } from 'react-i18next';
import { memo } from 'react';

const View = ({
  username,
  password,
  handleChange,
  handleLogin,
  t,
}: LoginProps) => {
  return (
    <div className="login-container">
      <Card color="white" shadow={true} className="p-8">
        <Typography variant="h4" color="blue-gray">
          {t('trans-login.login')}
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          {t('trans-login.instruction')}
        </Typography>
        <form className="max-w-screen-lg mt-8 mb-2 w-80 sm:w-96">
          <div className="flex flex-col gap-6 mb-1">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              {t('trans-login.username')}
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
              {t('trans-login.password')}
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
            {t('trans-login.login')}
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default memo(withTranslation()(View));
