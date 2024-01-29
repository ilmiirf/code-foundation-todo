export interface ProtectedNavbarInterface {
  toggleIsNavOpen: () => void;
  isNavOpen: boolean;
  logout: () => void;
  name: string | null;
}
