import styled from 'styled-components';

import { COLORS } from '../../utils/cssVariables';

const { card_bg } = COLORS;

export const MyCard = styled.div`
  background-color: ${card_bg};
  border-radius: 4px;
`;