import { type TFunction } from 'i18next';

export interface HomeInterface {
  navigate: () => void;
  t: TFunction<'translation', undefined>;
}
