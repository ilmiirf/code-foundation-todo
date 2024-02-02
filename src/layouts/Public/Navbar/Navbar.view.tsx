import { Button, Navbar, Typography } from '@material-tailwind/react';
import { type PublicNavbarProps } from './Navbar.type';

const View = ({ navigate }: PublicNavbarProps) => (
  <Navbar className="sticky top-0 z-10 max-w-full px-4 py-2 rounded-none h-max lg:px-8 lg:py-4">
    <div className="relative flex items-center justify-between mx-auto text-blue-gray-900">
      <Typography
        as="a"
        href="#"
        className="mr-4 ml-2 cursor-pointer py-1.5 font-medium hidden lg:block md:block"
      >
        React Code Foundation
      </Typography>
      <Button onClick={navigate}>Login</Button>
    </div>
  </Navbar>
);

export default View;
