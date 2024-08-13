import React from 'react';
import { Box, Flex, ButtonGroup } from '@chakra-ui/react'
import ReloadButton from './ReloadButton';
import TextModalButton from './TextModalButton';

const Buttons: React.FC = () => {
  return (
    <Box w="100%">
      <Flex justifyContent="center" alignItems="center">
        <ButtonGroup variant='outline' spacing='3'>
          <ReloadButton />
          <TextModalButton />
        </ButtonGroup>
      </Flex>
    </Box>
  );
};

export default Buttons;