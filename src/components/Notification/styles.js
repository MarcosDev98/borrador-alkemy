import styled from 'styled-components';

export const BodyComponent = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f2f2f2;
  
`;

export const Toast = styled.div`
  position: absolute;
  background: #fff;
  border-radius: 12px;
  padding: 20px 35px 20px 25px;
  box-shadow: 0 5px 10px rgba(0,0,0,0.1);
  top: 25px;
  right: 35px;
  border-left: 6px solid #09f;
  transform: ${props => props.active === 'true'
    ? 'translateX(calc(100% + 30px));'
    : 'translateX(0%);'
};
  transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.35);
`;

export const ToastContent = styled.div`
  display: flex;
  align-items: center;
  /* justi */
`;

export const Message = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 20px;

`;

export const Title = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: #333;
`;

export const Text = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: #555;
`;

export const CloseIcon = styled.i`
  position: absolute;
  top: 10px;
  right: 15px;
  padding: 3px;
  font-size: 20px;
  cursor: pointer;
  opacity: 0.6;

  :hover{
    opacity: 1;
  }

`;

export const CheckIcon = styled.i`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 35px;
  width: 35px;
  background-color: #09f;
  color: #fff;
  font-size: 27px;
  border-radius: 50%;
`;
