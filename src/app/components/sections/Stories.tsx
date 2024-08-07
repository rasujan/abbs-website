'use client';
import React from 'react';

import { Container, Grid, Image, Text } from '@mantine/core';
import ScrollAnimation from 'react-animate-on-scroll';

const Stories = () => {
  return (
    <>
      <ScrollAnimation
        animateIn="slideInUp"
        animateOut="fadeOut"
        animatePreScroll
        animateOnce={true}
      >
        <Container size={'xl'} id="stories" pt="xl3">
          <Text
            fz={{ base: 'xl3', md: 'd2' }}
            lh={{ base: 'xl3', md: 'd3' }}
            mb="lg"
            mt="xl3"
            tt="uppercase"
          >
            Latests Success Stories
          </Text>

          <Grid>
            <Grid.Col span={{ base: 12, md: 5 }}>
              <Text fz="xl" className="focus rounded">
                8 months
              </Text>

              <Text fz="d3" lh={'4rem'} mt="8rem">
                Driving Innovation through Strategic Tech Collaborations{' '}
              </Text>
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 7 }}>
              <Image
                h={'auto'}
                w="100%"
                fit="contain"
                src="https://ld-wp73.template-help.com/wordpress/prod_33653/v1/wp-content/uploads/2023/09/img3-min.png"
                alt="Success"
              />
            </Grid.Col>
          </Grid>
        </Container>
      </ScrollAnimation>
    </>
  );
};

export default Stories;
