export interface LoginInterface {
  username: string;
  password: string;
  handleChange: (e: any) => void;
  handleLogin: () => void;
  t: any;
}
