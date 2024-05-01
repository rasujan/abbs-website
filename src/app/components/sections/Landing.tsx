import React from 'react';
import { Box, Center, Title, Text, Container } from '@mantine/core';

const Landing = () => (
  <>
    <Box h="98vh" className="landing-bg" id="home">
      <Center h="56vh">
        <Box ta="center" mt="8rem">
          <Box>
            <Title fz="6rem" lh="10rem" tt="uppercase">
              {' '}
              Creating Software{' '}
            </Title>
          </Box>

          <Box>
            <Title fz="6rem" lh="10rem" tt="uppercase">
              {' '}
              Success Together{' '}
            </Title>
          </Box>
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
