import React from 'react';
import { Box, Flex, Heading } from '@chakra-ui/react';

const Header:React.FC = () => {
  return (
    <Box bgColor="gray.800" w="100%" p={4} mb={4} color="white">
      <Flex justifyContent="center" alignItems="center">
        <Heading as="h1" size="lg">
          Typing Speed Trainer
        </Heading>
      </Flex>
    </Box>
  )
};

export default Header;
