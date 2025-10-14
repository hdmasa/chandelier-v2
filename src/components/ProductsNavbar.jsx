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
import { usePathname } from 'next/navigation';

const ProductsNavbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('');
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));
  const pathname = usePathname();

  // Products page navigation items
  const navItems = [
    { name: 'خانه', href: '/', id: 'home' },
    { name: 'محصولات', href: '/products', id: 'all-products' },
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

  // Detect current route for underline
  useEffect(() => {
    const current = navItems.find(item => item.href === pathname);
    if (current) {
      setActiveLink(current.id);
    }
  }, [pathname]);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNavClick = (item) => {
    setActiveLink(item.id);
    if (item.href.startsWith('#')) {
      const element = document.querySelector(item.href);
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
            onClick={() => handleNavClick(item)}
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
          
          {/* Desktop Navigation (centered) */}
          {!isMobile && (
            <Box sx={{ display: 'flex', gap: 2, position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}>
              {navItems.map((item) => (
                <Box
                  key={item.name}
                  sx={{
                    position: 'relative',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      width: activeLink === item.id ? '100%' : '0%',
                      height: '2px',
                      backgroundColor: '#D4AF37',
                      transition: 'width 0.3s ease-in-out'
                    }
                  }}
                >
                  <Link 
                    href={item.href} 
                    style={{ textDecoration: 'none' }} 
                    onClick={() => setActiveLink(item.id)}
                  >
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
                        },
                      }}
                    >
                      {item.name}
                    </Button>
                  </Link>
                </Box>
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
