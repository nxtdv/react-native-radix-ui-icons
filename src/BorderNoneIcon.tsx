import React from 'react'
import Svg, { Rect } from 'react-native-svg'
import { IconProps } from './types'

const BorderNoneIcon: React.FC<IconProps> = ({ width = 24, height = 24, color = 'black' }) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 15 15" fill="none">
      <Rect x="7" y="5.025" width="1" height="1" rx=".5" fill={color} />
      <Rect x="13" y="5.025" width="1" height="1" rx=".5" fill={color} />
      <Rect x="7" y="3.025" width="1" height="1" rx=".5" fill={color} />
      <Rect x="13" y="3.025" width="1" height="1" rx=".5" fill={color} />
      <Rect x="7" y="7.025" width="1" height="1" rx=".5" fill={color} />
      <Rect x="7" y="13.025" width="1" height="1" rx=".5" fill={color} />
      <Rect x="7" y="1.025" width="1" height="1" rx=".5" fill={color} />
      <Rect x="13" y="7.025" width="1" height="1" rx=".5" fill={color} />
      <Rect x="13" y="13.025" width="1" height="1" rx=".5" fill={color} />
      <Rect x="13" y="1.025" width="1" height="1" rx=".5" fill={color} />
      <Rect x="5" y="7.025" width="1" height="1" rx=".5" fill={color} />
      <Rect x="5" y="13.025" width="1" height="1" rx=".5" fill={color} />
      <Rect x="5" y="1.025" width="1" height="1" rx=".5" fill={color} />
      <Rect x="3" y="7.025" width="1" height="1" rx=".5" fill={color} />
      <Rect x="3" y="13.025" width="1" height="1" rx=".5" fill={color} />
      <Rect x="3" y="1.025" width="1" height="1" rx=".5" fill={color} />
      <Rect x="9" y="7.025" width="1" height="1" rx=".5" fill={color} />
      <Rect x="9" y="13.025" width="1" height="1" rx=".5" fill={color} />
      <Rect x="9" y="1.025" width="1" height="1" rx=".5" fill={color} />
      <Rect x="11" y="7.025" width="1" height="1" rx=".5" fill={color} />
      <Rect x="11" y="13.025" width="1" height="1" rx=".5" fill={color} />
      <Rect x="11" y="1.025" width="1" height="1" rx=".5" fill={color} />
      <Rect x="7" y="9.025" width="1" height="1" rx=".5" fill={color} />
      <Rect x="13" y="9.025" width="1" height="1" rx=".5" fill={color} />
      <Rect x="7" y="11.025" width="1" height="1" rx=".5" fill={color} />
      <Rect x="13" y="11.025" width="1" height="1" rx=".5" fill={color} />
      <Rect x="1" y="5.025" width="1" height="1" rx=".5" fill={color} />
      <Rect x="1" y="3.025" width="1" height="1" rx=".5" fill={color} />
      <Rect x="1" y="7.025" width="1" height="1" rx=".5" fill={color} />
      <Rect x="1" y="13.025" width="1" height="1" rx=".5" fill={color} />
      <Rect x="1" y="1.025" width="1" height="1" rx=".5" fill={color} />
      <Rect x="1" y="9.025" width="1" height="1" rx=".5" fill={color} />
      <Rect x="1" y="11.025" width="1" height="1" rx=".5" fill={color} />
    </Svg>
  )
}

export default BorderNoneIcon
