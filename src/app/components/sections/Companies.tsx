'use client';

import { Container, Text, Image, SimpleGrid } from '@mantine/core';
import React from 'react';
import NextImage from 'next/image';

import drow from '@/../public/drow.jpeg';
import pem from '@/../public/pem.jpeg';
import ScrollAnimation from 'react-animate-on-scroll';

const SuccessStoriesSection = () => {
  return (
    <>
      <ScrollAnimation
        animateIn="rotateInDownLeft"
        animateOut="fadeOut"
        animatePreScroll
        animateOnce={true}
      >
        <Container size={'xl'} id="partners" px="xl3">
          <Text
            fz={{ base: 'xl3', md: 'd2' }}
            lh={{ base: 'xl3', md: 'd3' }}
            mb="lg"
            mt="xl3"
            tt="uppercase"
          >
            COMPANIES WE'RE PROUD TO HAVE WORKED WITH
          </Text>
        </Container>
      </ScrollAnimation>

      <Container py="xl3">
        <ScrollAnimation
          animateIn="bounceIn"
          animateOut="fadeOut"
          animatePreScroll
          animateOnce={true}
        >
          <SimpleGrid cols={{ base: 1, sm: 2 }} spacing={'md'} py="xl3">
            <Image
              component={NextImage}
              h={160}
              w="auto"
              fit="contain"
              src={drow}
              alt="drow"
            />

            <Image
              component={NextImage}
              h={160}
              w="auto"
              fit="contain"
              src={pem}
              alt="pem"
            />
          </SimpleGrid>
        </ScrollAnimation>
      </Container>
    </>
  );
};

export default SuccessStoriesSection;
