import React from 'react';
// This is the home page
import {
  Landing,
  Brief,
  Service,
  SuccessStories,
  Expertise,
  Industries,
  ParallaxEffect
} from './components';

export default function Home() {
  return (
    <main>
      <Landing />

      <Brief />

      <Service />

      <ParallaxEffect />

      <Expertise />

      <Industries />

      <SuccessStories />
    </main>
  );
}
