import styled from '@emotion/styled'
import { colors } from '../../styles/global';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  position: relative;
  
`;

export const ContentsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-column-gap: 50px;
  grid-row-gap: px;
  background-color: ${colors.dark30};
  padding: 16px 100px 0px 100px;
`

export const ContentGridOne = styled.div`
  grid-area: 1 / 1 / 2 / 2;
`

export const ContentGridTwo = styled.div`
  grid-area: 1 / 2 / 2 / 3;
`
export const ContentGridThree = styled.div`
  grid-area: 1 / 3 / 2 / 4;
`
  