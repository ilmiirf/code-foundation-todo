import React from 'react';
import View from './ProfileMenu.view';
import { type Logout } from './ProfileMenu.type';

const ProfileMenu = ({ logout }: Logout) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <View
      isMenuOpen={isMenuOpen}
      setIsMenuOpen={setIsMenuOpen}
      closeMenu={closeMenu}
      logout={logout}
    />
  );
};

export default ProfileMenu;
