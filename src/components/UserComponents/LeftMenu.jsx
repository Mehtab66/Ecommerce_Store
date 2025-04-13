import React from 'react';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import StorefrontIcon from '@mui/icons-material/Storefront';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { Typography } from '@mui/material';

export const LeftMenu = ({ mobileOpen, toggleDrawer }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const drawerWidth = 250;

  const navItems = [
    { label: 'Shop', icon: <StorefrontIcon /> },
    { label: 'Cart', icon: <ShoppingCartIcon /> },
    { label: 'My Orders', icon: <LocalShippingIcon /> },
    { label: 'Wishlist', icon: <FavoriteIcon /> },
  ];

  const userItems = [
    { label: 'Profile', icon: <AccountCircleIcon /> },
    { label: 'Logout', icon: <LogoutIcon /> },
  ];

  const DrawerList = (
    <Box  role="presentation" sx={{ backgroundColor: '#1E2A38', color: '#fff' ,width: drawerWidth}}>
      <Box sx={{ padding: '16px' }}>
        <Typography variant="h5" color="primary">E-Shop</Typography>
      </Box>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton
              sx={{
                '&:hover': {
                  backgroundColor: '#3D4A61', 
                },
              }}
            >
              <ListItemIcon sx={{ color: '#fff' }}>{item.icon}</ListItemIcon>
              <ListItemText primary={item.label} sx={{ color: '#fff' }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider sx={{ backgroundColor: '#3D4A61' }} />
      <List>
        {userItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton
              sx={{
                '&:hover': {
                  backgroundColor: '#3D4A61',
                },
              }}
            >
              <ListItemIcon sx={{ color: '#fff' }}>{item.icon}</ListItemIcon>
              <ListItemText primary={item.label} sx={{ color: '#fff' }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      {/* Mobile Drawer */}
      {isMobile && (
        <Drawer
          anchor="left"
          open={mobileOpen}
          onClose={toggleDrawer}
          sx={{
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              backgroundColor: '#1E2A38',
              color: '#fff',
              boxSizing: 'border-box',
            },
          }}
        >
          {DrawerList}
        </Drawer>
      )}

      {/* Desktop Permanent Drawer */}
      {!isMobile && (
        <Drawer
          variant="permanent"
          open
          sx={{
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              backgroundColor: '#1E2A38',
              color: '#fff',
              boxSizing: 'border-box',
            },
          }}
        >
          {DrawerList}
        </Drawer>
      )}
    </>
  );
};
