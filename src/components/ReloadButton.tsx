import React from 'react';
import { Box, Flex, Button } from '@chakra-ui/react'
import { RepeatIcon } from '@chakra-ui/icons'
import { useAppDispatch } from '../hooks';
import { setInputText } from '../store/textSlice';
import { setIsTimerOn, resetSeconds, setIsFinished } from '../store/statsSlice';

const ReloadButton: React.FC = () => {
  const dispatch = useAppDispatch();

  const handleButtonClick = () => {
    dispatch(setInputText(''));
    dispatch(resetSeconds());
    dispatch(setIsTimerOn(false));
    dispatch(setIsFinished(false));
  };

  return (
    <Box w="100%">
      <Flex justifyContent="center" alignItems="center">
        <Button leftIcon={<RepeatIcon />} colorScheme='gray' onClick={handleButtonClick}>
          Reload
        </Button>
      </Flex>
    </Box>
  )
};

export default ReloadButton;
