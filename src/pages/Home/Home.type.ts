import { type TFunction } from 'i18next';

export interface HomeProps {
  navigate: () => void;
  t: TFunction<'translation', undefined>;
}
