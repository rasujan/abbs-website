import React from 'react';

import { Box, Container, Text, SimpleGrid } from '@mantine/core';
import {
  IconCircle1Filled,
  IconCircle2Filled,
  IconCircle3Filled
} from '@tabler/icons-react';

type listT = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const Brief = () => {
  const list: listT[] = [
    {
      title: 'Understand',
      icon: <IconCircle1Filled size={'4rem'} />,
      description:
        'Understand your business strategy, IT environment, and budget. Lorem ipsum dolor sit amet consectetur. Ut ornare fusce sit pharetra eget vitae massa.'
    },
    {
      title: 'Implement',
      icon: <IconCircle2Filled size={'4rem'} />,
      description:
        'Implement strategic IT solutions tailored to your business. Tristique tortor turpis semper dolor blandit vulputate nulla pretium.'
    },
    {
      title: 'Empower',
      icon: <IconCircle3Filled size={'4rem'} />,
      description:
        'Empower your team with the right tools, agile support, and continuous IT planning. Tristique tortor turpis semper dolor blandit vulputate nulla pretium.'
    }
  ];

  return (
    <Box mih="98vh" className="brief-bg">
      <Container size="xl" pt="6rem">
        <Text fz="xl3" lh="3rem" tt="uppercase" lts={'4px'} my="xl" fw="bolder">
          <span className="focus"> Maximizing</span> your unique benefits with
          our solutions: server, chip, or cloud — we are here to make your
          software sharp, seamless, bright, on time, and on budget.
        </Text>
      </Container>

      <Container py="md">
        <Box>
          <SimpleGrid cols={{ base: 1, sm: 2 }} spacing={'md'}>
            {list.map((item) => (
              <Box key={item.title} my="md">
                {item.icon}

                <Text fw="bold" fz="xl" my="lg" tt="uppercase">
                  {' '}
                  {item.title}{' '}
                </Text>

                <Text> {item.description} </Text>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      </Container>
    </Box>
  );
};

export default Brief;
