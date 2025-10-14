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
import { useRouter } from 'next/navigation';

const Navigation = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));
  const router = useRouter();

  const navItems = [
    { name: 'معرفی کسب و کار', href: '#hero', id: 'hero', type: 'section' },
    { name: 'دسته بندی', href: '#categories', id: 'categories', type: 'section' },
    { name: 'درباره ما', href: '#about', id: 'about', type: 'section' },
    { name: 'پروسه', href: '#process', id: 'process', type: 'section' },
    { name: 'سه بعدی', href: '#threed', id: 'threed', type: 'section' },
    { name: 'محصولات', href: '/products', id: 'products', type: 'page' },
    { name: 'تماس با ما', href: '#contact', id: 'contact', type: 'section' },
  ];

  // Scroll effect for background change
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 100);

      // Determine active section for underline
      const sections = navItems.filter(i => i.type === 'section');
      let currentSection = '';
      sections.forEach((item) => {
        const el = document.querySelector(item.href);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            currentSection = item.id;
          }
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNavClick = (item) => {
    if (item.type === 'section') {
      const element = document.querySelector(item.href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setActiveSection(item.id);
      }
    } else if (item.type === 'page') {
      router.push(item.href);
      setActiveSection(item.id);
    }
    setMobileOpen(false);
  };

  const drawer = (
    <Box sx={{ width: 280, direction: 'rtl' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2, borderBottom: '1px solid #E0E0E0' }}>
        <Typography 
          variant="h6" 
          sx={{ 
            fontWeight: 'bold',
            color: '#2C1810',
            fontSize: '1.2rem'
          }}
        >
          منو
        </Typography>
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon sx={{ color: '#8B4513' }} />
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
                  color: '#2C1810'
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
          backgroundColor: isScrolled ? 'rgba(0, 0, 0, 1)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(10px)' : 'none',
          boxShadow: isScrolled ? '0 2px 20px rgba(0,0,0,0.1)' : 'none',
          transition: 'all 0.1s ease-in-out',
          borderBottom: isScrolled ? '1px solid rgba(139, 69, 19, 0.1)' : 'none'
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between', py: 1, px: { xs: 2, md: 4 } }}>
          {/* Logo */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Image
              src="/download.svg"
              alt="Persian Chandeliers Logo"
              width={70}
              height={70}
              style={{
                filter: isScrolled ? 'none' : 'brightness(0) invert(1)'
              }}
            />
            <Typography 
              variant="h5" 
              sx={{ 
                fontWeight: 'bold',
                color: isScrolled ? '#d5d3d3ff' : '#FFFEF7',
                textDecoration: 'none',
                fontSize: { xs: '1.2rem', md: '1.5rem' },
                transition: 'color 0.3s ease-in-out'
              }}
            >
              ستاره یخی
            </Typography>
          </Box>
          
          {/* Desktop Navigation (centered) */}
          {!isMobile && (
            <Box sx={{ display: 'flex', gap: 1, position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}>
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
                      width: activeSection === item.id ? '100%' : '0%',
                      height: '2px',
                      backgroundColor: '#D4AF37',
                      transition: 'width 0.3s ease-in-out'
                    }
                  }}
                >
                  <Button
                    onClick={() => handleNavClick(item)}
                    sx={{
                      color: isScrolled ? '#ffffffff' : '#FFFEF7',
                      fontWeight: 500,
                      fontSize: '0.95rem',
                      textTransform: 'none',
                      px: 2,
                      py: 1,
                      borderRadius: 2,
                      transition: 'all 0.3s ease-in-out',
                      '&:hover': {
                        backgroundColor: isScrolled ? 'rgba(139, 69, 19, 0.1)' : 'rgba(255, 255, 255, 0.1)',
                        color: isScrolled ? '#f0edebff' : '#FFFEF7',
                      },
                      '&:hover::after': {
                        width: '100%',
                      },
                    }}
                  >
                    {item.name}
                  </Button>
                </Box>
              ))}
            </Box>
          )}

          {/* Mobile Menu Button */}
          {isMobile && (
            <IconButton
              onClick={handleDrawerToggle}
              sx={{ 
                color: isScrolled ? '#ffffffff' : '#FFFEF7',
                transition: 'color 0.3s ease-in-out'
              }}
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
            backgroundColor: '#FFFEF7',
            direction: 'rtl'
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navigation;
