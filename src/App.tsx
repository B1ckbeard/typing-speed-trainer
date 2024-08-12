import React from 'react';
import Header from './components/Header';
import TestText from './components/TestText';
import TextInput from './components/TextInput';
import Stats from './components/Stats';
import { Container } from '@chakra-ui/react'

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Container maxW='3xl'>
        <TestText />
        <TextInput />
        <Stats />
      </Container>
    </div>
  );
};

export default App;
