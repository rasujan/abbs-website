import React from 'react';

import { Box, Container, Text, SimpleGrid } from '@mantine/core';

type listT = {
  title: string;
  description: string;
};

const Brief = () => {
  const list: listT[] = [
    {
      title: 'Understand',
      description:
        'Understand your business strategy, IT environment, and budget. Lorem ipsum dolor sit amet consectetur. Ut ornare fusce sit pharetra eget vitae massa.'
    },
    {
      title: 'Implement',
      description:
        'Implement strategic IT solutions tailored to your business. Tristique tortor turpis semper dolor blandit vulputate nulla pretium.'
    },
    {
      title: 'Empower',
      description:
        'Empower your team with the right tools, agile support, and continuous IT planning. Tristique tortor turpis semper dolor blandit vulputate nulla pretium.'
    }
  ];

  return (
    <Container py="md">
      <Box>
        <Text fz="xl3" lh="3rem" tt="capitalize" lts={'rem(6)'} my="xl">
          Maximizing your unique benefits with our solutions: server, chip, or
          cloud — we are here to make your software sharp, seamless, bright, on
          time, and on budget.
        </Text>

        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing={'md'}>
          {list.map((item) => (
            <Box key={item.title} my="md">
              <Text fw="bold" fz="xl" my="lg">
                {' '}
                {item.title}{' '}
              </Text>

              <Text> {item.description} </Text>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </Container>
  );
};

export default Brief;
