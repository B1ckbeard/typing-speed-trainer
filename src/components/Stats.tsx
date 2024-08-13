import React, { useCallback, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks';
import { setMistakes } from '../store/statsSlice';
import { setIsTimerOn, increaseSeconds } from '../store/timerSlice';
import { Box, Text } from '@chakra-ui/react'

const Stats: React.FC = () => {
  const dispatch = useAppDispatch();
  const { mistakes } = useAppSelector((state) => state.statsSlice);
  const { text, inputText } = useAppSelector((state) => state.textSlice);
  const { seconds, isTimerOn } = useAppSelector((state) => state.timerSlice);

  const handleTimerStart = () => {
    dispatch(setIsTimerOn(true));
  };

  const handleTimerStop = () => {
    dispatch(setIsTimerOn(false));
  };

  //функция для подсчета ошибок при наборе текста
  const calculateErrors = useCallback((input: string, text: string): number => {
    let errorsCount = 0;
    for (let i = 0; i < input.length; i++) {
      if (input[i] !== text[i]) {
        errorsCount++;
      }
    }
    return errorsCount;
  }, []);

  //вычисление скорости печати (WPM)
  const getSpeed = () => {
    if(seconds !== 0){
      const words = (text.length - mistakes) / 5;
      const minutes = seconds / 60;
      return Math.round(words / minutes);
    }
    return 0;
  };

  useEffect(() => {
    if (inputText.length > 0) {
      handleTimerStart();
    };

    if (inputText.length >= text.length) {
      handleTimerStop();
    };

    dispatch(setMistakes(calculateErrors(inputText, text)));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputText])

  useEffect(() => {
    if (isTimerOn) {
      const timer = setTimeout(() => {
        dispatch(increaseSeconds());
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [isTimerOn, seconds, dispatch]);

  return (
    <Box w='100%' bgColor='gray.100' borderRadius='md' p='4' mb={4}>
      <Text fontSize='xl'>Mistakes: {mistakes}</Text>
      <Text fontSize='xl'>Time: {seconds} seconds</Text>
      <Text fontSize='xl'>Speed: {getSpeed()} WPM</Text>
    </Box>
  )
};

export default Stats;
