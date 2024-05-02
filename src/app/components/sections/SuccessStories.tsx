import { Container, Text, Card, SimpleGrid } from '@mantine/core';
import React from 'react';

const SuccessStoriesSection = () => {
  return (
    <>
      <Container size={'xl'} id="success" pt="xl3">
        <Text
          fz={{ base: 'xl3', md: 'd2' }}
          lh={{ base: 'xl3', md: 'd3' }}
          mb="lg"
          mt="xl3"
          tt="uppercase"
        >
          Success Stories
        </Text>
      </Container>

      <Container>
        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing={'md'}>
          <Card px="0">
            <Text fz="xl" fw="bold" my="md">
              Drow
            </Text>
            <Text> Task Management System for contruction.</Text>
          </Card>

          <Card px="0">
            <Text fz="xl" fw="bold" my="md">
              Pokhara Event Center
            </Text>
            <Text> Event Management System</Text>
          </Card>
        </SimpleGrid>
      </Container>
    </>
  );
};

export default SuccessStoriesSection;
