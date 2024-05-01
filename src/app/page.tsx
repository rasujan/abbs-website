import React from 'react';
// This is the home page
import {
  Landing,
  Brief,
  Service,
  SuccessStories,
  Expertise,
  Testimonials
} from './components';

export default function Home() {
  return (
    <main>
      <Landing />

      <Brief />

      <Service />

      <Expertise />

      <SuccessStories />

      <Testimonials />
    </main>
  );
}
