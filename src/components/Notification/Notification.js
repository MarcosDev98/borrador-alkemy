import React from 'react';

// eslint-disable-next-line no-unused-vars
import { BodyComponent, Toast, ToastContent, CheckIcon, Message, Title, Text, CloseIcon} from './styles';

// eslint-disable-next-line no-unused-vars
const Notification = ({ mode, message, onClose }) => {

  return (
    // <BodyComponent>
    <Toast>
      <ToastContent>
        <CheckIcon className='uil uil-check'></CheckIcon>
        <Message>
          <Title>Exito</Title>
          <Text>Los cambios han sido guardados</Text>
        </Message>
      </ToastContent>
      {/** Creo que deberia usar 1 solo Icono y pasarle el className por las props.  */}
      <CloseIcon className='uil uil-times'></CloseIcon>
    </Toast>
    // </BodyComponent>
  );
};

export default Notification;