'use client';

import { Container, Text, Image, SimpleGrid, Flex } from '@mantine/core';
import React from 'react';
import NextImage from 'next/image';

import drow from '@/../public/drow.jpeg';
import pem from '@/../public/pem.jpeg';
import arkbo from '@/../public/arkbo.jpeg';
import seshra from '@/../public/seshra.jpeg';

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
            In Collaboration
          </Text>
        </Container>
      </ScrollAnimation>

      <Container py="xl3" size={'xl'}>
        <ScrollAnimation
          animateIn="bounceIn"
          animateOut="fadeOut"
          animatePreScroll
          animateOnce={true}
        >
          <SimpleGrid cols={{ base: 1, md: 2 }} spacing={'md'} py="xl3">
            <Image
              component={NextImage}
              h={160}
              w="auto"
              fit="contain"
              src={drow}
              alt="drow"
              pb="xl"
            />

            <Image
              component={NextImage}
              h={160}
              w="auto"
              fit="contain"
              src={pem}
              alt="pem"
              pb="xl"
            />

            <Image
              component={NextImage}
              h={100}
              w="auto"
              fit="contain"
              src={arkbo}
              alt="arkbo"
            />

            <Image
              component={NextImage}
              h={160}
              w="auto"
              fit="contain"
              src={seshra}
              alt="seshra"
            />
          </SimpleGrid>
        </ScrollAnimation>
      </Container>
    </>
  );
};

export default SuccessStoriesSection;
