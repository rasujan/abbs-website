'use client';
import React, { useEffect, useState } from 'react';
import { Box } from '@mantine/core';

const ParallaxComponent = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Box
      style={{
        backgroundImage:
          'url(https://ld-wp73.template-help.com/wordpress/prod_33653/v1/wp-content/uploads/2023/09/home_bg3-min.png)',
        backgroundSize: 'cover',
        backgroundPositionY: `${scrollPosition + 100}px`, // Adjust the multiplier to change the parallax effect speed
        minHeight: '100vh' // Ensure the Paper takes up the full viewport height
      }}
    ></Box>
  );
};

export default ParallaxComponent;
