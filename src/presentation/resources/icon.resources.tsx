import React from "react";
import { colors } from "../styles/global";



type IconProps = {
 variant: 'chevron-down',
 color?: 'primary' | 'secondary'
 size?: 'sm' | 'md' | 'lg'
}


function Icon( props: IconProps) {
 const { variant, color = 'primary', size ='md' } = props;
 const viewBoxCustom = "0 0 640 640";
 const sizeCustom = size === 'md' ? "32px" : size === 'lg' ? "56px" : "16px";
 const colorCustom = color === 'primary' ? colors.brandColor : colors.dark40;

 if(variant === 'chevron-down') return <svg style={{ width: sizeCustom }} fill={colorCustom}  viewBox={viewBoxCustom} xmlns="http://www.w3.org/2000/svg" ><path d="M297.4 470.6C309.9 483.1 330.2 483.1 342.7 470.6L534.7 278.6C547.2 266.1 547.2 245.8 534.7 233.3C522.2 220.8 501.9 220.8 489.4 233.3L320 402.7L150.6 233.4C138.1 220.9 117.8 220.9 105.3 233.4C92.8 245.9 92.8 266.2 105.3 278.7L297.3 470.7z"/></svg>
 return <svg  xmlns="http://www.w3.org/2000/svg" style={{ width: sizeCustom }} fill={colorCustom}  viewBox={viewBoxCustom}><path d="M297.4 470.6C309.9 483.1 330.2 483.1 342.7 470.6L534.7 278.6C547.2 266.1 547.2 245.8 534.7 233.3C522.2 220.8 501.9 220.8 489.4 233.3L320 402.7L150.6 233.4C138.1 220.9 117.8 220.9 105.3 233.4C92.8 245.9 92.8 266.2 105.3 278.7L297.3 470.7z"/></svg>
}

export default Icon;

