'use client';

import React from 'react';

import { Box, Container, Text, SimpleGrid } from '@mantine/core';
import {
  IconCircle1Filled,
  IconCircle2Filled,
  IconCircle3Filled
} from '@tabler/icons-react';
import ScrollAnimation from 'react-animate-on-scroll';

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
        'Clear communication and a strong focus on customer experience ensure the client feels valued and supported.'
    },
    {
      title: 'Implement',
      icon: <IconCircle2Filled size={'4rem'} />,
      description:
        'Detailed planning process, where the company collaborates closely with the client to design and tailor solutions that precisely meet their requirements.'
    },
    {
      title: 'Empower',
      icon: <IconCircle3Filled size={'4rem'} />,
      description:
        'Offering solutions that are not only effective but also user-friendly and scalable, allowing clients to grow and adapt as needed. By providing training, resources, and ongoing support, the company helps clients build their own capabilities and confidence in using technology.'
    }
  ];

  return (
    <Box mih="98vh" className="brief-bg">
      <ScrollAnimation
        animateIn="rotateInDownLeft"
        animateOut="fadeOut"
        animatePreScroll
        animateOnce={true}
      >
        <Container size="xl" pt="6rem">
          <Text
            fz="xl3"
            lh="3rem"
            tt="uppercase"
            lts={'4px'}
            my="xl"
            fw="bolder"
          >
            <span className="focus"> Maximizing</span> your unique benefits with
            our solutions: server, chip, or cloud — we are here to make your
            software sharp, seamless, bright, on time, and on budget.
          </Text>
        </Container>
      </ScrollAnimation>

      <Container py="md">
        <Box>
          <SimpleGrid cols={{ base: 1, sm: 2 }} spacing={'md'}>
            {list.map((item) => (
              <ScrollAnimation
                key={item.title}
                animateIn="rotateInUpRight"
                animateOut="fadeOut"
                animatePreScroll
                animateOnce={true}
              >
                <Box my="md">
                  {item.icon}

                  <Text fw="bold" fz="xl" my="lg" tt="uppercase">
                    {' '}
                    {item.title}{' '}
                  </Text>

                  <Text> {item.description} </Text>
                </Box>
              </ScrollAnimation>
            ))}
          </SimpleGrid>
        </Box>
      </Container>
    </Box>
  );
};

export default Brief;
