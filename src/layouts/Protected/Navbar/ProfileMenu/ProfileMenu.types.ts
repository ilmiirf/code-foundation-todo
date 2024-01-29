export interface ProfileMenuInterface {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  closeMenu: () => void;
  logout: () => void;
}

export interface LogoutType {
  logout: () => void;
}
