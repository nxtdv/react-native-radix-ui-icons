import React from 'react'
import Svg, { Path, Rect } from 'react-native-svg'
import { IconProps } from './types'

const BorderBottomIcon: React.FC<IconProps> = ({ width = 24, height = 24, color = 'black' }) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 15 15" fill="none">
      <Path
        d="M1 13.25L14 13.25V14.75L1 14.75V13.25Z"
        fill={color}
        clipRule="evenodd"
        fillRule="evenodd"
      />
      <Rect x="7" y="5" width="1" height="1" rx=".5" fill={color} />
      <Rect x="13" y="5" width="1" height="1" rx=".5" fill={color} />
      <Rect x="7" y="3" width="1" height="1" rx=".5" fill={color} />
      <Rect x="13" y="3" width="1" height="1" rx=".5" fill={color} />
      <Rect x="7" y="7" width="1" height="1" rx=".5" fill={color} />
      <Rect x="7" y="1" width="1" height="1" rx=".5" fill={color} />
      <Rect x="13" y="7" width="1" height="1" rx=".5" fill={color} />
      <Rect x="13" y="1" width="1" height="1" rx=".5" fill={color} />
      <Rect x="5" y="7" width="1" height="1" rx=".5" fill={color} />
      <Rect x="5" y="1" width="1" height="1" rx=".5" fill={color} />
      <Rect x="3" y="7" width="1" height="1" rx=".5" fill={color} />
      <Rect x="3" y="1" width="1" height="1" rx=".5" fill={color} />
      <Rect x="9" y="7" width="1" height="1" rx=".5" fill={color} />
      <Rect x="9" y="1" width="1" height="1" rx=".5" fill={color} />
      <Rect x="11" y="7" width="1" height="1" rx=".5" fill={color} />
      <Rect x="11" y="1" width="1" height="1" rx=".5" fill={color} />
      <Rect x="7" y="9" width="1" height="1" rx=".5" fill={color} />
      <Rect x="13" y="9" width="1" height="1" rx=".5" fill={color} />
      <Rect x="7" y="11" width="1" height="1" rx=".5" fill={color} />
      <Rect x="13" y="11" width="1" height="1" rx=".5" fill={color} />
      <Rect x="1" y="5" width="1" height="1" rx=".5" fill={color} />
      <Rect x="1" y="3" width="1" height="1" rx=".5" fill={color} />
      <Rect x="1" y="7" width="1" height="1" rx=".5" fill={color} />
      <Rect x="1" y="1" width="1" height="1" rx=".5" fill={color} />
      <Rect x="1" y="9" width="1" height="1" rx=".5" fill={color} />
      <Rect x="1" y="11" width="1" height="1" rx=".5" fill={color} />
    </Svg>
  )
}

export default BorderBottomIcon
