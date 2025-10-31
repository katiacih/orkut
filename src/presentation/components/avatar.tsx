import React from "react"
import { Container } from "./avatar.styles"



type AvatarProps = {
 children: React.ReactElement | string
  size?: 'sm' | 'md' | 'lg'
  variant?: 'primary' | 'default' | undefined
}


const AvatarComponent = (props: AvatarProps) => {
 const { variant= 'default', size= 'sm', children} = props;

 return (
  <Container variant={variant} size={size} >
    { children }
  </Container>
 )
}

export default AvatarComponent;