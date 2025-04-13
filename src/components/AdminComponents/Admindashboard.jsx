import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Card from '@mui/material/Card';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';

const drawerWidth = 240;

const AdminDashboard = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  const drawerContent = (
<div className="h-full bg-gray-800 text-white p-4">
  <Typography variant="h5" className="mb-6 font-bold">
    Admin Panel
  </Typography>

  <List>
    {['Dashboard', 'Add Product', 'Orders', 'Users', 'Settings'].map((text) => (
      <ListItem
        key={text}
        disablePadding
        className="rounded-lg overflow-hidden"
      >
        <div className="w-full px-4 py-2 text-white rounded-lg hover:bg-blue-500 hover:font-bold hover:rounded-2xl hover:shadow-md transition-all duration-200 cursor-pointer">
          {text}
        </div>
      </ListItem>
    ))}
  </List>
</div>


  );

  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">
      {/* Sidebar */}
      <Drawer
        variant={isMobile ? 'temporary' : 'permanent'}
        open={isMobile ? mobileOpen : true}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
      >
        {drawerContent}
      </Drawer>

      {/* Main Content Area */}
      <div
        className={`flex-1 flex flex-col transition-all duration-300 ${
          !isMobile ? 'ml-[240px]' : ''
        }`}
      >
        {/* AppBar */}
        <AppBar position="static" className="bg-white shadow-sm border-b">
          <Toolbar className="justify-between bg-gray-800">
            {isMobile && (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
              >
                <MenuIcon />
              </IconButton>
            )}
             <TextField
                        fullWidth
                        variant="outlined"
                        placeholder="Search your products..."
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
          </Toolbar>
        </AppBar>

        {/* Content */}
        <main className="p-6 space-y-6 bg-gray-100">
          {/* Stat Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: 'Total Sales', value: '$12,400' },
              { label: 'Orders', value: '128' },
              { label: 'Products', value: '56' },
              { label: 'Users', value: '237' },
            ].map(({ label, value }) => (
              <Card key={label} className="p-4 rounded-2xl shadow-sm">
                <Typography variant="h6">{label}</Typography>
                <Typography variant="h5" className="font-bold mt-2">
                  {value}
                </Typography>
              </Card>
            ))}
          </div>

          {/* Recent Orders Section */}
          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <Typography variant="h6" className="mb-4">
              Recent Orders
            </Typography>
            <div className="text-gray-600">Order table goes here...</div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
