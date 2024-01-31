import { type TFunction } from 'i18next';

export interface LoginInterface {
  username: string;
  password: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleLogin: () => void;
  t: TFunction<'translation', undefined>;
}
