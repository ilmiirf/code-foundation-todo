import { Card, Input, Button, Typography } from '@material-tailwind/react';
import { type LoginInterface } from './Login.types';
import { withTranslation } from 'react-i18next';
import { memo } from 'react';

const View = ({
  username,
  password,
  handleChange,
  handleLogin,
  t,
}: LoginInterface) => (
  <Card color="white" shadow={true} className="p-8 w-fit mx-auto mt-16">
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
        type="submit"
        fullWidth
        onClick={handleLogin}
        placeholder={undefined}
      >
        {t('trans-login.login')}
      </Button>
    </form>
  </Card>
);
export default memo(withTranslation()(View));