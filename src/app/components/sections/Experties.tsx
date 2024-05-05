'use client';

import { Container, Text, Card, SimpleGrid, Box } from '@mantine/core';
import React, { JSX } from 'react';
import {
  IconHierarchy,
  IconBuildingFactory2,
  IconBusinessplan,
  IconUserScan,
  IconLayersIntersect,
  IconTools
} from '@tabler/icons-react';
import ScrollAnimation from 'react-animate-on-scroll';

const ExpertiseSection = () => {
  const expertiseList: {
    icon: JSX.Element;
    title: string;
    description: string;
  }[] = [
    {
      icon: <IconHierarchy size="4rem" stroke="1" />,
      title: 'Tailored Solutions',
      description:
        'Crafted with precision, our customized software solutions are meticulously designed to meet the unique needs of your business, ensuring a perfect fit for your operations.'
    },
    {
      icon: <IconBuildingFactory2 size="4rem" stroke="1" />,
      title: 'Industry- Specific Expertise',
      description:
        'Benefit from our deep understanding of diverse industries, allowing us to develop software that aligns seamlessly with the specific requirements and challenges of your sector.'
    },
    {
      icon: <IconBusinessplan size="4rem" stroke="1" />,
      title: 'Scalability and Flexibility',
      description:
        'Our expertise lies in creating scalable and flexible software solutions that can grow with your business, adapting to evolving demands and ensuring long-term relevance.'
    },
    {
      icon: <IconUserScan size="4rem" stroke="1" />,
      title: 'User-Centric Design',
      description:
        'Prioritizing user experience, our customized software is intuitively designed, enhancing user satisfaction and productivity while minimizing the learning curve for your team.'
    },
    {
      icon: <IconLayersIntersect size="4rem" stroke="1" />,
      title: 'Integration Capabilities',
      description:
        'We specialize in developing software that seamlessly integrates with existing systems and third - party applications, streamlining workflows and optimizing overall efficiency.'
    },
    {
      icon: <IconTools size="4rem" stroke="1" />,
      title: 'Continuous Support and Maintenance',
      description:
        'Beyond the initial development, our commitment includes ongoing support and maintenance, ensuring your customized software operates at peak performance and remains up - to - date with the latest technological advancements.'
    }
  ];

  return (
    <Box className="expertise-bg">
      <ScrollAnimation
        animateIn="rotateInDownLeft"
        animateOut="fadeOut"
        animatePreScroll
        animateOnce={true}
      >
        <Container id="expertise" size="xl">
          <Text
            fz={{ base: 'xl3', md: 'd2' }}
            lh={{ base: 'xl3', md: 'd3' }}
            mb="lg"
            pt="6rem"
            tt="uppercase"
          >
            Expertise
          </Text>
        </Container>
      </ScrollAnimation>

      <Container>
        <SimpleGrid cols={{ base: 1, md: 2 }} spacing={'md'}>
          {expertiseList.map((ex) => (
            <ScrollAnimation
              key={ex.title}
              animateIn="rotateInUpRight"
              animateOut="fadeOut"
              animatePreScroll
              animateOnce={true}
            >
              <Card key={ex.title} shadow="#ccc 5px 5px 10px">
                {ex.icon}
                <Text fz="xl" fw="bold" my="md">
                  {ex.title}
                </Text>
                <Text> {ex.description}</Text>
              </Card>
            </ScrollAnimation>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default ExpertiseSection;
