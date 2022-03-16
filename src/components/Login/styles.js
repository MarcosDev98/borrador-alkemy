import styled from 'styled-components';
import { COLORS, FONTSIZES } from '../../utils/cssVariables';
import { MyContainer } from '../Container/styles';
import Input from '../Input/';

const { login_bg } = COLORS;
const { login_title } = FONTSIZES;

export const Body = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${login_bg};
  height: 100vh;
`;

export const Container = styled(MyContainer)`
  position: relative;
  max-width: 430px;
  width: 100%;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
`;

export const Forms = styled.div`

`;

export const Title = styled.span`
  font-size: ${login_title};
  font-weight: 600;
  position: relative;

  ::before{
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    height: 3px;
    width: 30px;
    background-color: ${login_bg};
    border-radius: 25px;
  }

`;

export const Form = styled.form`
  padding: 30px;
`;

export const InputField = styled.div`
  margin-top: 30px;
  height: 50px;
  width: 100%;
  margin-top: 30px;
  position: relative; 

`;

export const StyledInput = styled(Input)`
  position: absolute;
  padding: 0 35px;
  border: none;
  outline: none;
  border-bottom: 2px solid #ccc;
  border-top: 2px solid transparent;
  height: 100%;
  width: 100%;

`;