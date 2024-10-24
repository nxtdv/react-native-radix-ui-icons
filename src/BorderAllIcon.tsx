import React from 'react'
import { Path, Svg, Rect } from 'react-native-svg'
import { IconProps } from './types.js'

const BorderAllIcon: React.FC<IconProps> = ({ width = 24, height = 24, color = 'black' }) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 15 15" fill="none">
      <Path
        d="M0.25 1C0.25 0.585786 0.585786 0.25 1 0.25H14C14.4142 0.25 14.75 0.585786 14.75 1V14C14.75 14.4142 14.4142 14.75 14 14.75H1C0.585786 14.75 0.25 14.4142 0.25 14V1ZM1.75 1.75V13.25H13.25V1.75H1.75Z"
        fill={color}
        clipRule="evenodd"
        fillRule="evenodd"
      />
      <Rect x="7" y="5" width="1" height="1" rx=".5" fill={color} />
      <Rect x="7" y="3" width="1" height="1" rx=".5" fill={color} />
      <Rect x="7" y="7" width="1" height="1" rx=".5" fill={color} />
      <Rect x="5" y="7" width="1" height="1" rx=".5" fill={color} />
      <Rect x="3" y="7" width="1" height="1" rx=".5" fill={color} />
      <Rect x="9" y="7" width="1" height="1" rx=".5" fill={color} />
      <Rect x="11" y="7" width="1" height="1" rx=".5" fill={color} />
      <Rect x="7" y="9" width="1" height="1" rx=".5" fill={color} />
      <Rect x="7" y="11" width="1" height="1" rx=".5" fill={color} />
    </Svg>
  )
}

export default BorderAllIcon
