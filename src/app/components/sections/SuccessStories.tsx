import { Container, Text, Card, SimpleGrid } from '@mantine/core';
import React from 'react';

const SuccessStoriesSection = () => {
  return (
    <Container>
      <Text fz="xl3" lh="xl3" my="lg" ta="center">
        Success Stories
      </Text>

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
  );
};

export default SuccessStoriesSection;
