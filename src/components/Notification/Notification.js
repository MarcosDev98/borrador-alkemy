// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';

// eslint-disable-next-line no-unused-vars
import { BodyComponent, Toast, ToastContent, CheckIcon, Message, Title, Text, CloseIcon} from './styles';

// eslint-disable-next-line no-unused-vars
const Notification = ({ mode, title, message, onClose }) => {

  
  const hideNotification = () => {
    const toast = document.getElementById('toast');

    toast.style.transform = 'translateX(calc(100% + 35px))';
    
  };

  


  useEffect(() => {
    setTimeout(() => {
      hideNotification();
    }, 3000);
  }, []);

  // showHideNotification();

  return (
    // <BodyComponent>
    <Toast id='toast' mode={mode}>
      <ToastContent>
        <CheckIcon mode={mode} className='uil uil-check' />
        <Message>
          <Title>{title}</Title>
          <Text>{message}</Text>
        </Message>
      </ToastContent>
      {/** Creo que deberia usar 1 solo Icono y pasarle el className por las props.  */}
      <CloseIcon onClick={hideNotification} className='uil uil-times' />
    </Toast>
    // </BodyComponent>
  );
};

export default Notification;