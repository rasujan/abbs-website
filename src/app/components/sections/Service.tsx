import React from 'react';
import { Container, Text, Box, SimpleGrid } from '@mantine/core';

type listT = {
  title: string;
  description: string;
};

const ServiceSection = () => {
  const list: listT[] = [
    {
      title: 'IT CONSULTING',
      description:
        'Achieve organizational goals faster with ad-hoc advisory from our team. Receive a roadmap and strategic consultations on how to reach the desired to-be state.'
    },
    {
      title: 'FIXED-COST PROJECT',
      description:
        'Leverage our technical expertise, operational excellence, and refined software delivery framework to co- create the next software product together at a fast pace.'
    },
    {
      title: 'MANAGED TEAM',
      description:
        'Gain development speed with a remote engineering team, recruited in line with your requirements, managed to maximize the delivery pace, and scaled based on your needs.'
    },
    {
      title: 'STAFF AUGMENTATION',
      description:
        'Our team recruit the tech talent you require, based on your project requirements.Add missing skills to your in-house teams at a faster speed, with less overheads.'
    }
  ];

  return (
    <>
      <Container>
        <Text fz="xl3" lh="xl3" my="md" ta="center">
          Our Services
        </Text>

        <Text my="md" span>
          {' '}
          Explore our flexible IT outsourcing services, which can be chosen
          individually or combined to suit various business needs. With{' '}
          <Text fw="bold" span>
            {' '}
            ABSS Tech{' '}
          </Text>{' '}
          , you get clear advice on the best way to work together, proactive
          support as you get started and beyond, and a quick setup for smooth
          operations.
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
      </Container>
    </>
  );
};

export default ServiceSection;
