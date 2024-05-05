import { Container, Text, Image, SimpleGrid } from '@mantine/core';
import React from 'react';
import NextImage from 'next/image';

import drow from '@/../public/drow.jpeg';
import pem from '@/../public/pem.jpeg';

const SuccessStoriesSection = () => {
  return (
    <>
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

      <Container py="xl3">
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
      </Container>
    </>
  );
};

export default SuccessStoriesSection;
