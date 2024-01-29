import React from 'react';
import View from './ProfileMenu.view';
import { type LogoutType } from './ProfileMenu.types';

const ProfileMenu = ({ logout }: LogoutType) => {
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
