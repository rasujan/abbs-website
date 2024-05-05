'use client';
import * as React from 'react';
import NextImage from 'next/image';

import { Box, Container, Grid, Image, Text } from '@mantine/core';

import { IconMail, IconLocation, IconPhoneCall } from '@tabler/icons-react';

import classes from './Footer.module.scss';
import abbs from '@/../public/abbs.jpeg';

const Footer = () => {
  return (
    <Box className={classes.footer} py="xl4" id="contact">
      <Container size={'xl'}>
        <Grid>
          <Grid.Col span={{ base: 12, md: 4 }} bg="rgba(49, 49, 49, 0.3)">
            <Image
              h={100}
              w="auto"
              fit="contain"
              component={NextImage}
              src={abbs}
              alt="ABBS"
            />
            <Text my="lg">
              Empowering Innovation, Transforming Futures. Discover the
              possibilities with A.B.S.S Tech - Where Technology meets Vision
            </Text>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 2 }}></Grid.Col>

          <Grid.Col span={{ base: 12, md: 6 }} bg="rgba(49, 49, 49, 0.3)">
            <Text fz="xl" fw="bold" mb="lg">
              Contact Info
            </Text>
            <Text fz="xl">
              {' '}
              <IconMail /> info@techabss.com{' '}
            </Text>
            <Text fz="xl">
              {' '}
              <IconPhoneCall /> +977 9851240913{' '}
            </Text>
            <Text fz="xl">
              {' '}
              <IconLocation /> Durbarmarg,Kathmandu{' '}
            </Text>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
