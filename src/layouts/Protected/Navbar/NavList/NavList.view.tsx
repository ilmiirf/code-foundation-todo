import { MenuItem, Typography } from '@material-tailwind/react';
import React from 'react';
import { navListItems } from './NavList.item';

const View = () => (
  <ul className="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row md:flex-row lg:items-center">
    {navListItems.map(({ label, icon, path }, key) => (
      <Typography
        key={label}
        as="a"
        href={path}
        variant="small"
        color="gray"
        className="font-medium text-blue-gray-500"
      >
        <MenuItem className="flex items-center gap-2 lg:rounded-full">
          {React.createElement(icon, { className: 'h-[18px] w-[18px]' })}{' '}
          <span className="text-gray-900"> {label}</span>
        </MenuItem>
      </Typography>
    ))}
  </ul>
);

export default View;
