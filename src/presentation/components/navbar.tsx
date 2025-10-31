

import React from 'react';
import { List, ListItem, Logo, NavbarCustom, StyledLink, UserText } from './navbar.styles';
import { ButtonGroup, Col, Container, Dropdown,Form, Row } from 'react-bootstrap';
import { colors, surfaces, typhografy } from '../styles/global';
import AvatarComponent from './avatar';
import Icon from '../resources/icon.resources';



function Navbar() {
  return (
    <Container style={{ padding: '18px', backgroundColor: colors.dark40}}>
    <Row>
      <Col xl='1'  ><Logo>orkut</Logo></Col>
      <Col >
        <NavbarCustom>
          <List>
            <ListItem><StyledLink to="/home">Inicio</StyledLink></ListItem>
            <ListItem><StyledLink to="/home">Perfil</StyledLink></ListItem>
            <ListItem><StyledLink to="/home">Comunidades</StyledLink></ListItem>
            <ListItem><StyledLink to="/home">Jogos</StyledLink></ListItem>
          </List>
        </NavbarCustom>
      </Col>
      <Col>
        <>
          <Form.Control
            style={{ backgroundColor: surfaces.dark30, color: typhografy.dark30 }}
            placeholder='Pesquisar no Orkut'
          />
        </>
      </Col>
      <Col>
        <Dropdown as={ButtonGroup} style={{ alignItems: 'center'}}>
        <AvatarComponent><img src="../resources/dwightshrute.jpeg"/></AvatarComponent>
        <UserText>Denin JJ</UserText>
        {/* <Dropdown.Toggle split variant="success" id="dropdown-split-basic" style={{ color: colors.brandColor, backgroundColor: 'transparent', border: 'none' }} /> */}
        <Dropdown.Toggle split id="dropdown-split-basic" style={{ backgroundColor: 'transparent', border: 'none' }} >
          <Icon variant='chevron-down' color='primary' size='sm'/>
        </Dropdown.Toggle>
        <Dropdown.Menu >
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      </Col>
    </Row>
  </Container>
  )
}

export default Navbar;
