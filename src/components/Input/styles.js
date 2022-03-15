import styled from 'styled-components';

export const TextInput = styled.input.attrs( props => ({
  type: props.type || 'text',
  autoComplete: props.autoComplete || 'off',
}))`
  background-color: #fff;
  border-radius: 4px;
  border: 1px solid rgba(34, 34, 34, 0.15);
  box-sizing: border-box;
  outline-color: rgba(0, 132, 255, 0.733);
  outline: 1px solid unset;
  padding: 0.715em 1.07em;
  width: 75%;
`;

export const Label = styled.label`
  color: #222;
  display: block;
  font-weight: 700;
  margin: 0 0 0.357em 0;
`;

export const Field = styled.div`
  font-size: 14px;
  margin-bottom: 1em;
`;
