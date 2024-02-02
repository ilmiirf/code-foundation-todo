import { type TFunction } from 'i18next';

export interface LoginProps {
  username: string;
  password: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleLogin: () => void;
  t: TFunction<'translation', undefined>;
}
