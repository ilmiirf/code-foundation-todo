export interface ProfileMenuProps {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  closeMenu: () => void;
  logout: () => void;
}

export interface Logout {
  logout: () => void;
}
