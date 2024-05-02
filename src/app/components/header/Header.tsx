'use client';

import React from 'react';

import {
  Group,
  Divider,
  Box,
  Burger,
  Drawer,
  ScrollArea,
  Image,
  rem,
  Text,
  Container
} from '@mantine/core';
import NextImage from 'next/image';
import { useDisclosure } from '@mantine/hooks';
import abbs from '@/../public/abbs.jpeg';

import classes from './Header.module.css';
import Link from 'next/link';

const Header = () => {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);

  return (
    <Box>
      <header className={classes.header}>
        <Container size={'xl'}>
          <Group className="inner" justify="space-between" h="100%">
            <Group>
              <Image
                component={NextImage}
                src={abbs}
                height={'40'}
                alt="ABBS"
                width="100"
              />
            </Group>

            <Burger opened={drawerOpened} onClick={toggleDrawer} />
          </Group>
        </Container>
      </header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        padding="md"
        title="ABBS"
        zIndex={1000000}
        position="right"
      >
        <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
          <Divider my="sm" />
          <Link href="/" className={classes.link}>
            <Text tt="uppercase">Home</Text>
          </Link>

          <Link href="#services" className={classes.link}>
            <Text tt="uppercase">Services</Text>
          </Link>

          <Link href="#expertise" className={classes.link}>
            <Text tt="uppercase"> Expertise</Text>
          </Link>

          <Link href="#success" className={classes.link}>
            <Text tt="uppercase"> Success</Text>
          </Link>

          <Link href="#testimonials" className={classes.link}>
            <Text tt="uppercase"> Testimonials</Text>
          </Link>

          <Divider my="sm" />
        </ScrollArea>
      </Drawer>
    </Box>
  );
};

export default Header;
