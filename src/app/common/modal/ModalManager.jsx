import React from 'react';
import { useSelector } from 'react-redux';
import TestModal from '../../../features/sandbox/testModal';
import SignInForm from '../../../features/auth/SignInForm';

export default function ModalManager() {
  const modalLookup = {
     TestModal,
     SignInForm   
  };
  
  const currentModal = useSelector((state) => state.modals);
  let renderModal;
  if(currentModal) {
    const {modalType, modalProps} = currentModal;    
    const ModalComponent = modalLookup[modalType];    
    renderModal = <ModalComponent {...modalProps} />;    
  }  
  return <span>{renderModal}</span>
}