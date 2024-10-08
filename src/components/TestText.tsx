import React, { useMemo } from 'react';
import { useAppSelector } from '../hooks';
import { Box, Text } from '@chakra-ui/react'

const TestText: React.FC = () => {
  const {text, inputText } = useAppSelector((state) => state.textSlice);

  // сравнение ввода пользователя с текстом.
  // стилизация для правильно и неправильно введенных символов
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
    <Box w='100%' mb={4} p={4} bgColor='gray.100' borderRadius='md'>
      <Text fontSize='xl'>{getColoredText}</Text>
    </Box>
  );
};

export default TestText;
