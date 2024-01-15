import React from 'react';
import { Box, Center, Title, Text, rem } from '@mantine/core';

const Landing = () => (
  <>
    <Box h="92vh">
      <Center h="60vh">
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
        <Text w={rem('300px')}>
          One software development vendor — multiple ways of collaborating. We
          offer a scoped range of outsourcing models that can be adapted to your
          current needs and scaled as you grow.
        </Text>
      </Center>
    </Box>
  </>
);

export default Landing;
