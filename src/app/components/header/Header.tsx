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

import classes from './Header.module.scss';
import Link from 'next/link';

const Header = () => {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);

  const list = [
    {
      title: 'Home',
      link: '/'
    },
    {
      title: 'Services',
      link: '#services'
    },
    {
      title: 'Success Stories',
      link: '#stories'
    },
    {
      title: 'Expertise',
      link: '#expertise'
    },
    { title: 'Industries', link: '#industries' },
    { title: 'Partners', link: '#partners' },
    {
      title: 'Contact',
      link: '#contact'
    }
  ];

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
        size={'50vw'}
        zIndex={1000000}
        position="right"
      >
        <ScrollArea
          h={`calc(100vh - ${rem(60)})`}
          mx="-md"
          className="drawer-bg"
        >
          <Divider my="sm" />

          {list.map((item) => (
            <Link
              key="item.tile"
              href={item.link}
              onClick={closeDrawer}
              className={classes.link}
            >
              <Text tt="uppercase" fz="xl3" p="lg" className="link-f">
                {item.title}
              </Text>
            </Link>
          ))}

          <Divider my="sm" />
        </ScrollArea>
      </Drawer>
    </Box>
  );
};

export default Header;
