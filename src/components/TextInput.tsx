import React from 'react';
import { useAppDispatch, useAppSelector } from '../hooks';
import { setInputText } from '../store/textSlice';
import { Box, Textarea } from '@chakra-ui/react'

const TextInput: React.FC = () => {
  const dispatch = useAppDispatch();
  const { inputText } = useAppSelector((state) => state.textSlice);

  const handleChangeInput = (value:string) => {
    dispatch(setInputText(value));
  };

  return (
    <Box w='100%' mb={4}>
      <Textarea w='100%' h='200px' fontSize='xl'bgColor="white"
        autoFocus
        spellCheck='false'
        placeholder='Type here...'
        value={inputText}
        onChange={e => handleChangeInput(e.target.value)}
        rows={5}
        focusBorderColor="gray.100"
      />
    </Box>
  )
};

export default TextInput;
