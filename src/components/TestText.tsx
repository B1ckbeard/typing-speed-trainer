import React, { useEffect, useMemo } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks';
import { setText } from '../store/textSlice';
import { Box, Text } from '@chakra-ui/react'

const TestText: React.FC = () => {
  const dispatch = useAppDispatch();
  const {text, inputText } = useAppSelector((state) => state.textSlice);

  // сделать массив из текста + вставка своего
  const testText = `In a hole in the ground there lived a hobbit.`.toLowerCase().replace(/[.,:-]/g, '');

  useEffect(() => {
    dispatch(setText(testText));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getColoredText = useMemo((): JSX.Element[] => {
    return text.split('').map((char, index) => {
      if (index < inputText.length) {
        return char === inputText[index]
          ? <span key={index} style={{ color: 'green' }}>{char}</span>
          : <span key={index} style={{ color: 'red' }}>{char}</span>;
      }
      return <span key={index}>{char}</span>;
    });
  }, [text, inputText]);
  
  return (
    <Box w='100%' mb={4}>
      <Text fontSize='2xl'>{getColoredText}</Text>
    </Box>
  );
};

export default TestText;
