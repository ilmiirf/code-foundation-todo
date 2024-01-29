import './Home.css';
import { type HomeInterface } from './Home.types';
import { Typography, Button } from '@material-tailwind/react';
import { withTranslation } from 'react-i18next';
import { memo } from 'react';

const View = ({ navigate, t }: HomeInterface) => (
  <main className="home-container">
    <Typography className="home__header">{t('trans-start.title')}</Typography>
    <Typography className="home__body">
      {t('trans-start.description1')}
    </Typography>
    <Typography className="home__sub-header">
      {t('trans-start.description2')}
    </Typography>
    <Button onClick={navigate}>{t('trans-start.get-start')}</Button>
  </main>
);

export default memo(withTranslation()(View));
