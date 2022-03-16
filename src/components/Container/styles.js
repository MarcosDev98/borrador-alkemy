import styled from 'styled-components';
import { COLORS, FONTSIZES } from '../../utils/cssVariables';

const { container_bg } = COLORS;
const { container } = FONTSIZES;

export const MyContainer = styled.div`
  background-color: ${container_bg};
  font-size: ${container};
  margin-left: auto;
  margin-right: auto;
  max-width: 80%;
`;

