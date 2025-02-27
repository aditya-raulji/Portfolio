import React from 'react';
import { Layout } from './components/Layout';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Resume } from './components/Resume';
import { Work } from './components/Work';
import { Contact } from './components/Contact';

function App() {
  return (
    <Layout>
      <Hero />
      <Services />
      <Resume />
      <Work />
      <Contact />
    </Layout>
  );
}

export default App;