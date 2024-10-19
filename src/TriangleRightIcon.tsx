import React from 'react'
import Svg, { Path, Rect } from 'react-native-svg'
import { IconProps } from './types'

const TriangleRightIcon: React.FC<IconProps> = ({ width = 24, height = 24, color = 'black' }) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 15 15" fill="none">
      <Path d="M6 11L6 4L10.5 7.5L6 11Z" fill={color} clipRule="evenodd" fillRule="evenodd" />
    </Svg>
  )
}

export default TriangleRightIcon
