import * as React from 'react';
import { Box, Card, Center, Container, SimpleGrid, Text } from '@mantine/core';

const Industries = () => {
  const industries = [
    'Customize Projects',
    'HR Software',
    'Media & Entertainment',
    'E-commerce Sites',
    'IT Professionals Outsourcing',
    'Sales Team Outsourcing'
  ];

  const list = [
    {
      title: 'MULTI-INDUSTRY TRACK RECORD',
      description:
        'Our portfolio of delivered IT projects includes over 1,000 successful tech initiatives in the most demanding and data-driven sectors.'
    },
    {
      title: 'WORLDWIDE REACH',
      description:
        'Owing to multiple R&D centers and globally distributed IT staff, we are in the right position to help customers from any country.'
    },
    {
      title: 'EXTENSIVE IT TALENT POOL',
      description:
        'In our company employs over 3,500 tech experts – including developers, architects, data scientists, DevOps engineers etc. – who are ready to deliver IT projects of any scope and complexity.'
    },
    {
      title: 'HIGH CUSTOMER SATISFACTION RATES',
      description:
        'The overwhelming majority of our customers – 98% – are totally content with the results we deliver, stay with us, and refer us to their partners and peers.'
    }
  ];

  return (
    <Box className="industries-bg">
      <Container id="expertise" size="xl">
        <Text
          fz={{ base: 'xl3', md: 'd2' }}
          lh={{ base: 'xl3', md: 'd3' }}
          mb="lg"
          pt="6rem"
          tt="uppercase"
        >
          Industries and Expertise
        </Text>

        <Text>
          At A.B.S.S Tech, we offer transparent guidance to help you discover
          the most effective collaboration strategy. From proactive support
          during onboarding to seamless operational ramp-up, our team ensures a
          swift and successful journey every step of the way.
        </Text>
      </Container>

      <Container my="4rem">
        <Center>
          <SimpleGrid cols={{ base: 1 }} spacing={'md'}>
            {industries.map((ex) => (
              <Card
                key={ex}
                withBorder
                radius={'4rem'}
                p="md"
                px="lg"
                className="h-focus"
              >
                <Text fz="xl2" tt="uppercase">
                  {ex}
                </Text>
              </Card>
            ))}
          </SimpleGrid>
        </Center>
      </Container>

      <Box mih="70vh">
        <Container size="xl" pt="6rem">
          <Text
            fz="xl3"
            lh="3rem"
            tt="uppercase"
            lts={'4px'}
            my="xl"
            fw="bolder"
          >
            AS A <span className="focus">TOP-RANKED AND TRUSTED</span> SOFTWARE
            DEVELOPMENT COMPANY, WE RUN A POOL OF PROFICIENT IT EXPERTS AND USE
            THE BEST AVAILABLE TOOLS AND TECHNIQUES TO ENGINEER ADVANCED
            SOFTWARE FOR OUR CUSTOMERS.
          </Text>
        </Container>

        <Container py="md">
          <Box>
            <SimpleGrid cols={{ base: 1, sm: 2 }} spacing={'md'}>
              {list.map((item) => (
                <Box key={item.title} my="md">
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
    </Box>
  );
};

export default Industries;
