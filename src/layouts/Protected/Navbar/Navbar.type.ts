export interface ProtectedNavbarProps {
  toggleIsNavOpen: () => void;
  isNavOpen: boolean;
  logout: () => void;
  name: string | null;
}
