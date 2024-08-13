import React from 'react';
import { Button } from '@chakra-ui/react'
import { useAppDispatch } from '../hooks';
import { openModal } from '../store/modalSlice'

const TextModalButton: React.FC = () => {
  const dispatch = useAppDispatch();

  const handleOpenTextModal = () => {
    dispatch(openModal('textModal'));
  }

  return (
    <Button onClick={handleOpenTextModal}>Set custom text</Button>
  )
};

export default TextModalButton;
