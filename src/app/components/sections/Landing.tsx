import React from 'react';

import NextImage from 'next/image';
import {
  Box,
  Center,
  Title,
  Text,
  Container,
  Image,
  Flex
} from '@mantine/core';

import R1 from '@/../public/r1.svg';
import R2 from '@/../public/r2.svg';

const Landing = () => (
  <>
    <Box mih="103vh" className="landing-bg" id="home">
      <Center h="70vh">
        <Box ta="center" mt="8rem">
          <Title
            fz={{ base: '3rem', md: '4rem', lg: '6rem' }}
            fw="normal"
            lh={{ base: '4rem', md: '5rem', lg: '7rem' }}
            tt="uppercase"
            className="letter-spacing-xl"
          >
            <Flex align={'baseline'}>
              {' '}
              Creating{' '}
              <Image
                w="160px"
                mx="lg"
                visibleFrom="md"
                component={NextImage}
                src={R1}
                alt="R1"
                mt="2rem"
              />
              Software{' '}
            </Flex>
          </Title>

          <Center hiddenFrom="md">
            <Image
              w="160px"
              mx="lg"
              component={NextImage}
              src={R1}
              alt="R1"
              mt="2rem"
            />
          </Center>

          <Title
            fz={{ base: '3rem', md: '4rem', lg: '6rem' }}
            fw="normal"
            lh={{ base: '4rem', md: '5rem', lg: '7rem' }}
            tt="uppercase"
            className="letter-spacing-xl"
          >
            <Flex align={'baseline'}>
              {' '}
              Success Together{'  '}
              <Image
                w="160px"
                component={NextImage}
                src={R2}
                mx="lg"
                visibleFrom="lg"
                mt="2rem"
                alt="R2"
              />
            </Flex>
          </Title>
        </Box>
      </Center>

      <Center>
        <Text fz="xl3" lh="4rem" mb="2rem" tt="uppercase" fw="bold">
          Strengthening Bonds
        </Text>
      </Center>

      <Center>
        <Container bg="#ffffff55">
          <Text my="md" fz="xl">
            Embark on a dynamic software development journey with our versatile
            collaboration options. Choose from a curated range of outsourcing
            models, finely tuned to meet your immediate needs and ready to
            effortlessly scale as your business flourishes.
          </Text>

          <Text mb="md" fz="xl">
            Unleashing the full potential of your distinct advantages through
            our solutions: we are dedicated to ensuring your software is
            precise, smooth, vibrant, punctual, and within budget.{' '}
          </Text>
        </Container>
      </Center>
    </Box>
  </>
);

export default Landing;
