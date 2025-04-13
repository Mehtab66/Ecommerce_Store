import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import { LeftMenu } from './LeftMenu';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      {/* Pass control to LeftMenu */}
      <LeftMenu mobileOpen={mobileOpen} toggleDrawer={handleDrawerToggle} />

      <div
        className={`p-2 flex items-center justify-between ${
          isMobile ? '' : 'ml-62'
        }`}
        style={{
          backgroundColor: '#2D3E50', // Deep navy color for a clean, professional look
        }}
      >
        <ul className="flex items-center gap-8 font-semibold text-lg text-white">
          {isMobile && (
            <li>
              <IconButton onClick={handleDrawerToggle} sx={{ color: 'white' }}>
                <MenuIcon />
              </IconButton>
            </li>
          )}
          <li className="hover:bg-blue-600 p-2 rounded-lg transition duration-200 cursor-pointer">Home</li>
          <li className="hover:bg-blue-600 p-2 rounded-lg transition duration-200 cursor-pointer">Products</li>
          <li className="hover:bg-blue-600 p-2 rounded-lg transition duration-200 cursor-pointer">Cart</li>
          <li className="hover:bg-blue-600 p-2 rounded-lg transition duration-200 cursor-pointer">Profile</li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
