import React, { useState } from 'react';
import { useAppDispatch } from '../../hooks';
import { closeModal } from '../../store/modalSlice'
import { setText, setInputText } from '../../store/textSlice';
import { setIsTimerOn, resetSeconds } from '../../store/timerSlice';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Input
} from '@chakra-ui/react'

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TextModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const dispatch = useAppDispatch();

  const [customText, setCustomText] = useState('');

  const handleCloseModal = () => {
    dispatch(closeModal());
  }

  const handleChangeInput = (value:string) => {
    setCustomText(value);
  }

  const handleAddTextModal = () => {
    dispatch(setText(customText));
    dispatch(setInputText(''));
    dispatch(setIsTimerOn(false));
    dispatch(resetSeconds());
    dispatch(closeModal());
  }

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add custom text</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input
              placeholder='Type here'
              autoFocus
              value={customText}
              onChange={e => handleChangeInput(e.target.value)}
            />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='green' mr={3} onClick={handleAddTextModal}>Save</Button>
            <Button colorScheme='blue' onClick={handleCloseModal}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default TextModal;
