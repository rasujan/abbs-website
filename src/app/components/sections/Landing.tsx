import React from 'react';
import { Box, Center, Title, Text, Container, rem } from '@mantine/core';

const Landing = () => (
  <>
    <Box h="92vh">
      <Center h="56vh">
        <Box ta="center">
          <Box>
            <Title fz="6rem" lh="7rem">
              {' '}
              Creating Software{' '}
            </Title>
          </Box>

          <Box>
            <Title fz="6rem" lh="7rem">
              {' '}
              Success Together{' '}
            </Title>
          </Box>
        </Box>
      </Center>

      <Center>
        <Text fz="xl3" lh="4rem" mb="2rem">
          Strengthening Bonds
        </Text>
      </Center>

      <Center>
        <Container>
          <Text my="md">
            Embark on a dynamic software development journey with our versatile
            collaboration options. Choose from a curated range of outsourcing
            models, finely tuned to meet your immediate needs and ready to
            effortlessly scale as your business flourishes.
          </Text>

          <Text mb="md">
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
