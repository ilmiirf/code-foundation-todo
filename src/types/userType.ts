export interface AuthState {
  name: string | null;
  token: string | null;
}

export interface LoginRequestType {
  username: string;
  password: string;
}

export interface LoginResponseType {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
  token: string;
}
