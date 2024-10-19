import React from 'react'
import Svg, { Circle } from 'react-native-svg'
import { IconProps } from './types'

const DragHandleDots1Icon: React.FC<IconProps> = ({ width = 24, height = 24, color = 'black' }) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 15 15" fill="none">
      <Circle cx="4.5" cy="2.5" r=".6" fill={color} />
      <Circle cx="4.5" cy="4.5" r=".6" fill={color} />
      <Circle cx="4.5" cy="6.499" r=".6" fill={color} />
      <Circle cx="4.5" cy="8.499" r=".6" fill={color} />
      <Circle cx="4.5" cy="10.498" r=".6" fill={color} />
      <Circle cx="4.5" cy="12.498" r=".6" fill={color} />
      <Circle cx="6.5" cy="2.5" r=".6" fill={color} />
      <Circle cx="6.5" cy="4.5" r=".6" fill={color} />
      <Circle cx="6.5" cy="6.499" r=".6" fill={color} />
      <Circle cx="6.5" cy="8.499" r=".6" fill={color} />
      <Circle cx="6.5" cy="10.498" r=".6" fill={color} />
      <Circle cx="6.5" cy="12.498" r=".6" fill={color} />
      <Circle cx="8.499" cy="2.5" r=".6" fill={color} />
      <Circle cx="8.499" cy="4.5" r=".6" fill={color} />
      <Circle cx="8.499" cy="6.499" r=".6" fill={color} />
      <Circle cx="8.499" cy="8.499" r=".6" fill={color} />
      <Circle cx="8.499" cy="10.498" r=".6" fill={color} />
      <Circle cx="8.499" cy="12.498" r=".6" fill={color} />
      <Circle cx="10.499" cy="2.5" r=".6" fill={color} />
      <Circle cx="10.499" cy="4.5" r=".6" fill={color} />
      <Circle cx="10.499" cy="6.499" r=".6" fill={color} />
      <Circle cx="10.499" cy="8.499" r=".6" fill={color} />
      <Circle cx="10.499" cy="10.498" r=".6" fill={color} />
      <Circle cx="10.499" cy="12.498" r=".6" fill={color} />
    </Svg>
  )
}

export default DragHandleDots1Icon
