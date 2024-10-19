import React from 'react'
import Svg, { Path, Rect } from 'react-native-svg'
import { IconProps } from './types'

const TriangleDownIcon: React.FC<IconProps> = ({ width = 24, height = 24, color = 'black' }) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 15 15" fill="none">
      <Path d="M4 6H11L7.5 10.5L4 6Z" fill={color} clipRule="evenodd" fillRule="evenodd" />
    </Svg>
  )
}

export default TriangleDownIcon
