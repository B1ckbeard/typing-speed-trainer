import React, { useCallback, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks';
import { setIsTimerOn, increaseSeconds, setIsFinished } from '../store/statsSlice';
import { Box, Text } from '@chakra-ui/react'

const Stats: React.FC = () => {
  const dispatch = useAppDispatch();
  const { isTimerOn, seconds, isFinished } = useAppSelector((state) => state.statsSlice);
  const { text, inputText } = useAppSelector((state) => state.textSlice);

  const [errorsCount, setErrorsCount] = useState(0);

  const calculateErrors = useCallback((input: string, text: string): number => {
    let errorsCount = 0;
    for (let i = 0; i < input.length; i++) {
      if (input[i] !== text[i]) {
        errorsCount++;
      }
    }
    return errorsCount;
  }, []);

  const getSpeed = () => {
    const words = (text.length - errorsCount) / 5;
    const minutes = seconds / 60;
    return Math.round(words / minutes);
  };

  useEffect(() => {
    if (inputText.length > 0 && inputText.length < text.length) {
      dispatch(setIsTimerOn(true));
      dispatch(setIsFinished(false));
    };

    if (inputText.length === text.length) {
      dispatch(setIsTimerOn(false));
      dispatch(setIsFinished(true));
    };

    setErrorsCount(calculateErrors(inputText, text));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputText])

  useEffect(() => {
    if (isTimerOn) {
      const timer = setTimeout(() => {
        dispatch(increaseSeconds())
      }, 1000);
      return () => clearTimeout(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isTimerOn]);

  return (
    <Box w='100%' mb={4}>
      <Text fontSize='xl'>Errors: {errorsCount}</Text>
      <Text fontSize='xl'>Time: {seconds} seconds</Text>
      {isFinished && (
        <Text fontSize='2xl'>Speed: {getSpeed()} WPM</Text>
      )}
    </Box>
  )
};

export default Stats;
