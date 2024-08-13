import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import TextModal from './TextModal';
import { closeModal } from '../../store/modalSlice'

const ModalWindow:React.FC = () => {
  const dispatch = useAppDispatch();
  const { modalType, isOpened } = useAppSelector((state) => state.modalSlice);

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  switch (modalType) {
    case 'textModal': {
      return (
        <TextModal
          isOpen={isOpened}
          onClose={handleCloseModal}
        />
      );
    }
    default: {
      return null;
    }
  }
};

export default ModalWindow;