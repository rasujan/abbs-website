import React from 'react';

import { Container, Text, Card, SimpleGrid } from '@mantine/core';

const Testimonials = () => {
  const testimonialList = [
    {
      description: `"I am delighted to share my experience as a client of A.B.S.S Tech. Working with  A.B.S.S Tech has been nothing short of exceptional. Their expertise and dedication have greatly contributed to the success of our project. We engaged  A.B.S.S Tech to assist in the development of a critical component of our project, the DROW system. Their team not only demonstrated profound technical proficiency but also showcased a remarkable ability to understand our unique requirements and translate them into a robust solution. The efficiency and quality with which they executed this task were truly impressive. Moreover, A.B.S.S Tech assisted us in outsourcing a QA employee for our project. This individual seamlessly integrated into our team, demonstrating a high level of competence and commitment. Their contributions significantly improved the overall quality and reliability of our deliverables. I would highly recommend  A.B.S.S Tech] to any organization seeking innovative IT solutions and reliable outsourcing services. They have undoubtedly proven themselves as a trusted partner capable of delivering excellent results."`,
      org: 'Drow',
      name: 'CK'
    },
    {
      description: `"I am delighted to provide a resounding testimonial for  A.B.S.S Tech, whose exceptional work in developing our website has surpassed our highest expectations. Their dedication to excellence is evident in every facet of our project, from design conception to ongoing support. A.B.S.S Tech combines technical expertise with creative innovation, resulting in a website that not only meets but exceeds industry standards. Their attention to detail and commitment to understanding our unique business needs ensured a seamless and effective collaboration."`,
      org: 'Pokhara Event Center',
      name: 'Ujjwol Acharyas'
    }
  ];
  return (
    <Container>
      <Text fz="xl3" lh="xl3" my="lg" ta="center">
        Testimonial
      </Text>

      <SimpleGrid cols={{ base: 1 }} spacing={'md'}>
        {testimonialList.map((ex) => (
          <Card px="0" key={ex.org}>
            <Text fz="xl" fw="bold" my="md">
              {ex.org}
            </Text>

            <p>
              {ex.description} - <b>{ex.name}</b>
            </p>
          </Card>
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default Testimonials;
