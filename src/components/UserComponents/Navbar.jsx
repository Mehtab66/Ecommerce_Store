import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import { LeftMenu } from './LeftMenu';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <LeftMenu mobileOpen={mobileOpen} toggleDrawer={handleDrawerToggle} />

      <div
        className={`px-4 py-3 flex items-center justify-between shadow-md ${
          isMobile ? '' : 'ml-62'
        }`}
        style={{
          backgroundColor: '#1E2A38',
          transition: 'all 0.3s ease-in-out',
        }}
      >
        <div className="flex items-center gap-4 w-full">
          {isMobile && (
            <IconButton onClick={handleDrawerToggle} sx={{ color: 'white' }}>
              <MenuIcon />
            </IconButton>
          )}

          <TextField
            fullWidth
            variant="outlined"
            placeholder="Search products..."
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: 'white', opacity: 0.6 }} />
                </InputAdornment>
              ),
              sx: {
                backgroundColor: '#2B3B4B',
                color: 'white',
                borderRadius: '8px',
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#415A77',
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#6C8EBF',
                },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#6C8EBF',
                },
                '& input': {
                  color: 'white',
                },
              },
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
