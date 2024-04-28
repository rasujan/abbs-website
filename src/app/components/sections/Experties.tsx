import { Container, Text, Card, SimpleGrid } from '@mantine/core';
import React, { JSX } from 'react';
import {
  IconHierarchy,
  IconBuildingFactory2,
  IconBusinessplan,
  IconUserScan,
  IconLayersIntersect,
  IconTools
} from '@tabler/icons-react';

const ExpertiseSection = () => {
  const expertiseList: {
    icon: JSX.Element;
    title: string;
    description: string;
  }[] = [
    {
      icon: <IconHierarchy size="2rem" />,
      title: 'Tailored Solutions',
      description:
        'Crafted with precision, our customized software solutions are meticulously designed to meet the unique needs of your business, ensuring a perfect fit for your operations.'
    },
    {
      icon: <IconBuildingFactory2 size="2rem" />,
      title: 'Industry- Specific Expertise',
      description:
        'Benefit from our deep understanding of diverse industries, allowing us to develop software that aligns seamlessly with the specific requirements and challenges of your sector.'
    },
    {
      icon: <IconBusinessplan size="2rem" />,
      title: 'Scalability and Flexibility',
      description:
        'Our expertise lies in creating scalable and flexible software solutions that can grow with your business, adapting to evolving demands and ensuring long-term relevance.'
    },
    {
      icon: <IconUserScan size="2rem" />,
      title: 'User-Centric Design',
      description:
        'Prioritizing user experience, our customized software is intuitively designed, enhancing user satisfaction and productivity while minimizing the learning curve for your team.'
    },
    {
      icon: <IconLayersIntersect size="2rem" />,
      title: 'Integration Capabilities',
      description:
        'We specialize in developing software that seamlessly integrates with existing systems and third - party applications, streamlining workflows and optimizing overall efficiency.'
    },
    {
      icon: <IconTools size="2rem" />,
      title: 'Continuous Support and Maintenance',
      description:
        'Beyond the initial development, our commitment includes ongoing support and maintenance, ensuring your customized software operates at peak performance and remains up - to - date with the latest technological advancements.'
    }
  ];

  return (
    <Container>
      <Text fz="xl3" lh="xl3" my="lg" ta="center">
        Expertise
      </Text>

      <SimpleGrid cols={{ base: 2 }} spacing={'md'}>
        {expertiseList.map((ex) => (
          <Card px="0" key={ex.title}>
            {ex.icon}
            <Text fz="xl" fw="bold" my="md">
              {ex.title}
            </Text>
            <Text> {ex.description}</Text>
          </Card>
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default ExpertiseSection;
