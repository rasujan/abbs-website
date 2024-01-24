import React from 'react';
// This is the home page
import { Landing, Brief, Service } from './components';

export default function Home() {
  return (
    <main>
      <Landing />

      <Brief />

      <Service />
    </main>
  );
}
