'use client';

import React from 'react';

import {
  Group,
  Divider,
  Box,
  Burger,
  Drawer,
  ScrollArea,
  rem,
  Text
} from '@mantine/core';

import { useDisclosure } from '@mantine/hooks';

import classes from './Header.module.css';
import Link from 'next/link';

const Header = () => {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);

  return (
    <Box>
      <header className={classes.header}>
        <Group justify="space-between" h="100%">
          <Group>
            {/* // Todo : replace it with logo */}
            <Text fz="lg"> ABBS </Text>
          </Group>
          {/* // Keep next side of header in another Group */}
          <Group h="100%" gap="sm" visibleFrom="sm">
            <Link href="#" className={classes.link}>
              <Text>Home</Text>
            </Link>

            <Link href="#" className={classes.link}>
              <Text> Learn</Text>
            </Link>
          </Group>

          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            hiddenFrom="sm"
          />
        </Group>
      </header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="ABBS"
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
          <Divider my="sm" />
          <Link href="/" className={classes.link}>
            Home
          </Link>

          <Link href="/" className={classes.link}>
            <Text> Learn</Text>
          </Link>

          <Divider my="sm" />
        </ScrollArea>
      </Drawer>
    </Box>
  );
};

export default Header;
