import styled from '@emotion/styled'
import { colors, surfaces, typhografy } from '../styles/global'
import {  Link } from 'react-router-dom'
import { Form } from 'react-bootstrap'

export const Logo = styled.h3`
 font-family: "Inter", sans-serif;
 font-optical-sizing: auto;
 font-weight: bold;
 font-style: normal;
 font-size: 40px;
 color: ${colors.brandColor}
`

export const List = styled.ul`
 display: flex;
 list-style-type: none;
`

export const NavbarCustom = styled.nav`
 padding-top: 14px;
`

export const ListItem = styled.li`
 margin: auto;
`
export const StyledLink = styled(Link)`
 font-family: "Inter", sans-serif;
 color: ${colors.dark10};
 text-decoration: none;
 font-weight: 300;
 font-size: 14px;
 

 &:hover {
   color: ${colors.brandColor};
   text-decoration: none;
 }
`;

export const InputSearch = styled(Form.Control)`
 background-color: ${surfaces.dark30}
 color: ${typhografy.dark10}

`;

export const Avatar = styled.div`
 width: 36px;
 height: 36px;
 background-color: purple;
 border-radius: 50%;
 width: 36px;
 padding-top: 8px;
 padding-left: 8px;
 margin-right: 8px;
`

export const UserText = styled.span`
 font-size: 14px;
 color: ${colors.dark10};
 font-family: "Inter", sans-serif;
`

export const CustomToggle = styled.span`
 :after {
  content: ' \00A7';
 }
`
