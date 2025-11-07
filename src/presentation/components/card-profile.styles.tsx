import styled from '@emotion/styled'

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: white;
  border-radius: 10%;
  padding: 16px;
  width: 300px;
`;

export const ProfileName = styled.h3`
 text-align: center;
 font-weight: 400;
`

export const ProfilePhoto = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: green;
  border: solid 2px #cc29a1;
  margin-bottom: 24px;
`
