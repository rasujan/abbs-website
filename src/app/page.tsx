import React from 'react';
// This is the home page
import {
  Landing,
  Brief,
  Service,
  Companies,
  Expertise,
  Industries,
  ParallaxEffect,
  Stories
} from './components';

export default function Home() {
  return (
    <main>
      <Landing />

      <Brief />

      <Service />

      <ParallaxEffect />

      <Stories />

      <Expertise />

      <Industries />

      <Companies />
    </main>
  );
}
