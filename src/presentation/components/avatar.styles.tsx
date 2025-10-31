import styled from '@emotion/styled'


type ContainerProps = {
 size?: 'sm' | 'md' | 'lg'
 variant?: 'primary' | 'default' | undefined
} 

export const Container = styled.div`
 color: ${(props: ContainerProps) => (props.variant === 'primary' ? 'hotpink' : 'turquoise')};
 width:  ${(props: ContainerProps) => (props.size === 'sm' ? '36px' : (props.size === 'md' ? '42px' :'56px'))};  
 height:  ${(props: ContainerProps) => (props.size === 'sm' ? '36px' : (props.size === 'md' ? '42px' :'56px'))};  
 background-color: purple;
 border-radius: 50%;
 margin: 0 auto;
`