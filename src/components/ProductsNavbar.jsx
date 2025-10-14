'use client';

import { useState, useEffect } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  IconButton, 
  Drawer, 
  List, 
  ListItem, 
  ListItemText,
  Box,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';
import Image from 'next/image';
import Link from 'next/link';

const ProductsNavbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));

  // Products page navigation items
  const navItems = [
    { name: 'خانه', href: '/', id: 'home' },
    { name: 'همه محصولات', href: '/products', id: 'all-products' },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNavClick = (href) => {
    if (href === '/') {
      return; // Let Next.js handle the route
    }
    
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setMobileOpen(false);
  };

  const drawer = (
    <Box sx={{ width: 280, direction: 'rtl', bgcolor: '#000', height: '100%' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2, borderBottom: '1px solid #333' }}>
        <Typography 
          variant="h6" 
          sx={{ 
            fontWeight: 'bold',
            color: '#FFFEF7',
            fontSize: '1.2rem'
          }}
        >
          منو
        </Typography>
        <IconButton onClick={handleDrawerToggle} sx={{ color: '#FFFEF7' }}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List sx={{ px: 2, py: 1 }}>
        {navItems.map((item) => (
          <ListItem 
            key={item.name} 
            sx={{ 
              cursor: 'pointer',
              borderRadius: 1,
              mb: 1,
              '&:hover': {
                backgroundColor: 'rgba(212, 175, 55, 0.1)'
              }
            }}
            onClick={() => handleNavClick(item.href)}
          >
            <ListItemText 
              primary={item.name}
              sx={{ 
                textAlign: 'right',
                '& .MuiListItemText-primary': {
                  fontSize: '1.1rem',
                  fontWeight: 500,
                  color: '#FFFEF7'
                }
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar 
        position="fixed" 
        elevation={0}
        sx={{ 
          backgroundColor: isScrolled ? 'rgba(0, 0, 0, 0.95)' : 'rgba(0, 0, 0, 0.9)',
          backdropFilter: 'blur(10px)',
          boxShadow: isScrolled ? '0 2px 20px rgba(0,0,0,0.3)' : 'none',
          transition: 'all 0.3s ease-in-out',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between', py: 1, px: { xs: 2, md: 4 } }}>
          {/* Logo */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 2, textDecoration: 'none' }}>
              <Image
                src="/download.svg"
                alt="ستاره یخی Logo"
                width={60}
                height={60}
                style={{ filter: 'brightness(0) invert(1)' }}
              />
              <Typography 
                variant="h5" 
                sx={{ 
                  fontWeight: 'bold',
                  color: '#FFFEF7',
                  textDecoration: 'none',
                  fontSize: { xs: '1.2rem', md: '1.5rem' },
                }}
              >
                ستاره یخی
              </Typography>
            </Link>
          </Box>
          
          {/* Desktop Navigation */}
          {!isMobile && (
            <Box sx={{ display: 'flex', gap: 2 }}>
              {navItems.map((item) => (
                item.href === '/' ? (
                  <Link key={item.name} href={item.href} style={{ textDecoration: 'none' }}>
                    <Button
                      sx={{
                        color: '#FFFEF7',
                        fontWeight: 500,
                        fontSize: '0.95rem',
                        textTransform: 'none',
                        px: 2,
                        py: 1,
                        borderRadius: 2,
                        transition: 'all 0.3s ease-in-out',
                        '&:hover': {
                          backgroundColor: 'rgba(255, 255, 255, 0.1)',
                          color: '#D4AF37'
                        }
                      }}
                    >
                      {item.name}
                    </Button>
                  </Link>
                ) : (
                  <Button
                    key={item.name}
                    onClick={() => handleNavClick(item.href)}
                    sx={{
                      color: '#FFFEF7',
                      fontWeight: 500,
                      fontSize: '0.95rem',
                      textTransform: 'none',
                      px: 2,
                      py: 1,
                      borderRadius: 2,
                      transition: 'all 0.3s ease-in-out',
                      '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        color: '#D4AF37'
                      }
                    }}
                  >
                    {item.name}
                  </Button>
                )
              ))}
            </Box>
          )}

          {/* Mobile Menu Button */}
          {isMobile && (
            <IconButton
              onClick={handleDrawerToggle}
              sx={{ color: '#FFFEF7' }}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', lg: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: 280,
            backgroundColor: '#000',
            direction: 'rtl'
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default ProductsNavbar;