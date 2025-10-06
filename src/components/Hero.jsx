'use client';

import { Box, Typography, Button, Container } from '@mui/material';
import { ArrowForward } from '@mui/icons-material';
import Image from 'next/image';

const Hero = () => {
  const handleViewProducts = () => {
    const element = document.querySelector('#products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box 
      id="hero"
      sx={{ 
        height: '100vh',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      {/* Background Image */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 1
        }}
      >
        <Image
          src="/banner.jpg"
          alt="Persian Chandelier Banner"
          fill
          style={{
            objectFit: 'cover',
            objectPosition: 'center'
          }}
          priority
        />
        
        {/* Dark overlay for better text readability */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            zIndex: 2
          }}
        />
      </Box>

      {/* Content */}
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 3 }}>
        <Box sx={{ textAlign: 'center', color: '#FFFEF7' }}>
          <Typography 
            variant="h1" 
            sx={{ 
              fontWeight: 'bold',
              fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem', lg: '5.5rem' },
              lineHeight: 1.1,
              mb: 4,
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.29)',
              direction: 'rtl'
            }}
          >
             ستاره یخی
          </Typography>
          
          <Typography 
            variant="h2" 
            sx={{ 
              fontWeight: 'bold',
              fontSize: { xs: '1.8rem', sm: '2.5rem', md: '3rem', lg: '3.5rem' },
              lineHeight: 1.2,
              mb: 2,
              textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
              direction: 'rtl',
              color: '#ffffffff'
            }}
          >
            اولین و تنها تولید کننده
          </Typography>
          
          <Typography 
            variant="h2" 
            sx={{ 
              fontWeight: 'bold',
              fontSize: { xs: '1.8rem', sm: '2.5rem', md: '3rem', lg: '3.5rem' },
              lineHeight: 1.2,
              mb: 6,
              textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
              direction: 'rtl',
              color: '#ffffffff'
            }}
          >
            لوستر های ابری در ایران
          </Typography>

          <Button
            onClick={handleViewProducts}
            variant="outlined"
            size="large"
            endIcon={<ArrowForward />}
            sx={{
              border: '2px solid #FFFEF7',
              color: '#FFFEF7',
              backgroundColor: 'transparent',
              px: 6,
              py: 2,
              fontSize: { xs: '1rem', md: '1.2rem' },
              fontWeight: 600,
              textTransform: 'none',
              borderRadius: 0,
              backdropFilter: 'blur(10px)',
              transition: 'all 0.3s ease',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                borderColor: '#D4AF37',
                color: '#D4AF37',
                transform: 'translateY(-2px)',
                boxShadow: '0 8px 25px rgba(0,0,0,0.3)'
              },
              '&:active': {
                transform: 'translateY(0px)'
              }
            }}
          >
            مشاهده محصولات
          </Button>
        </Box>
      </Container>

      {/* Decorative Elements */}
      <Box
        sx={{
          position: 'absolute',
          top: '10%',
          right: '10%',
          zIndex: 2,
          animation: 'float 3s ease-in-out infinite'
        }}
      >
        <Box
          sx={{
            width: 20,
            height: 20,
            borderRadius: '50%',
            backgroundColor: '#D4AF37',
            opacity: 0.6,
            boxShadow: '0 0 20px rgba(212, 175, 55, 0.8)'
          }}
        />
      </Box>
      
      <Box
        sx={{
          position: 'absolute',
          bottom: '20%',
          left: '15%',
          zIndex: 2,
          animation: 'float 4s ease-in-out infinite reverse'
        }}
      >
        <Box
          sx={{
            width: 15,
            height: 15,
            borderRadius: '50%',
            backgroundColor: '#FFFEF7',
            opacity: 0.7,
            boxShadow: '0 0 15px rgba(255, 255, 255, 0.8)'
          }}
        />
      </Box>
      
      <Box
        sx={{
          position: 'absolute',
          top: '30%',
          left: '8%',
          zIndex: 2,
          animation: 'float 5s ease-in-out infinite'
        }}
      >
        <Box
          sx={{
            width: 12,
            height: 12,
            borderRadius: '50%',
            backgroundColor: '#D4AF37',
            opacity: 0.5,
            boxShadow: '0 0 10px rgba(212, 175, 55, 0.6)'
          }}
        />
      </Box>
    </Box>
  );
};

export default Hero;



