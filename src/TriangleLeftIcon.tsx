import React from 'react'
import { Path, Svg } from 'react-native-svg'
import { IconProps } from './types.js'

const TriangleLeftIcon: React.FC<IconProps> = ({ width = 24, height = 24, color = 'black' }) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 15 15" fill="none">
      <Path d="M9 4L9 11L4.5 7.5L9 4Z" fill={color} clipRule="evenodd" fillRule="evenodd" />
    </Svg>
  )
}

export default TriangleLeftIcon
