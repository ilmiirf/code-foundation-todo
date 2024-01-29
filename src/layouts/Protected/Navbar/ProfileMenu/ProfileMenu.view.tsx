import {
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
} from '@material-tailwind/react';
import { type ProfileMenuInterface } from './ProfileMenu.types';
import {
  ChevronDownIcon,
  UserCircleIcon,
  PowerIcon,
} from '@heroicons/react/24/solid';

const View = ({
  isMenuOpen,
  setIsMenuOpen,
  closeMenu,
  logout,
}: ProfileMenuInterface) => (
  <div className="flex items-center gap-2">
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <Button
          variant="text"
          color="blue-gray"
          className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
        >
          <Avatar
            variant="circular"
            size="sm"
            alt="tania andrew"
            className="border border-gray-900 p-0.5"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
          />
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3 w-3 transition-transform ${
              isMenuOpen ? 'rotate-180' : ''
            }`}
          />
        </Button>
      </MenuHandler>
      <MenuList className="p-1">
        <MenuItem className="flex items-center gap-2 rounded hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10">
          <UserCircleIcon className="h-4 w-4" />
          <Typography
            variant="small"
            className="font-normal text-xs"
            onClick={closeMenu}
          >
            My Profile
          </Typography>
        </MenuItem>
        <MenuItem
          className="flex items-center gap-2 rounded hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
          onClick={logout}
        >
          <PowerIcon className="h-4 w-4" />
          <Typography variant="small" className="font-normal text-xs">
            Logout
          </Typography>
        </MenuItem>
      </MenuList>
    </Menu>
  </div>
);

export default View;
