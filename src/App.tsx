import React from 'react';
import Header from './components/Header';
import TestText from './components/TestText';
import TextInput from './components/TextInput';
import Stats from './components/Stats';
import ReloadButton from './components/ReloadButton';
import { Box, Container } from '@chakra-ui/react'

const App: React.FC = () => {
  return (
    <Box className="App" h='100vh'>
      <Header />
      <Container maxW='3xl' p='4' bgColor="white">
        <TestText />
        <TextInput />
        <Stats />
        <ReloadButton />
      </Container>
    </Box>
  );
};

export default App;
