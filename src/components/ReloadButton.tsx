import React from 'react';
import { useAppDispatch } from '../hooks';
import { setInputText } from '../store/textSlice';
import { setIsTimerOn, resetSeconds } from '../store/timerSlice';
import { Button } from '@chakra-ui/react'
import { RepeatIcon } from '@chakra-ui/icons'

const ReloadButton: React.FC = () => {
  const dispatch = useAppDispatch();

  const handleButtonClick = () => {
    dispatch(setInputText(''));
    dispatch(setIsTimerOn(false));
    dispatch(resetSeconds());
  };

  return (
    <Button leftIcon={<RepeatIcon />} colorScheme='gray' onClick={handleButtonClick}>
      Reload
    </Button>
  )
};

export default ReloadButton;
