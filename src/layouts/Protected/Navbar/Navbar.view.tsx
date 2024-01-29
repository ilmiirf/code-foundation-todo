import NavList from './NavList';
import ProfileMenu from './ProfileMenu';

import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from '@material-tailwind/react';
import { Bars2Icon } from '@heroicons/react/24/solid';
import { type ProtectedNavbarInterface } from './Navbar.types';

const View = ({
  toggleIsNavOpen,
  isNavOpen,
  logout,
  name,
}: ProtectedNavbarInterface) => (
  <Navbar className="sticky top-0 z-10 max-w-full px-4 py-2 rounded-none h-max lg:px-8 lg:py-4">
    <div className="relative flex items-center justify-between mx-auto text-blue-gray-900">
      <Typography
        as="a"
        href="#"
        className="mr-4 ml-2 cursor-pointer py-1.5 font-medium hidden lg:block"
      >
        Hi {name}
      </Typography>
      <IconButton
        size="sm"
        color="blue-gray"
        variant="text"
        onClick={toggleIsNavOpen}
        className="ml-auto mr-2 lg:hidden md:hidden"
      >
        <Bars2Icon className="w-6 h-6" />
      </IconButton>
      <div className="hidden lg:block md:block">
        <NavList />
      </div>
      <ProfileMenu logout={logout} />
    </div>
    <Collapse open={isNavOpen} className="overflow-scroll">
      <NavList />
    </Collapse>
  </Navbar>
);

export default View;
