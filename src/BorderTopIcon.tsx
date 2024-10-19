import React from 'react'
import Svg, { Path, Rect } from 'react-native-svg'
import { IconProps } from './types'

const BorderTopIcon: React.FC<IconProps> = ({ width = 24, height = 24, color = 'black' }) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 15 15" fill="none">
      <Path
        d="M14 1.75L1 1.75L1 0.249999L14 0.25L14 1.75Z"
        fill={color}
        clipRule="evenodd"
        fillRule="evenodd"
      />
      <Rect x="8" y="10" width="1" height="1" rx=".5" transform="rotate(-180 8 10)" fill={color} />
      <Rect x="2" y="10" width="1" height="1" rx=".5" transform="rotate(-180 2 10)" fill={color} />
      <Rect x="8" y="12" width="1" height="1" rx=".5" transform="rotate(-180 8 12)" fill={color} />
      <Rect x="2" y="12" width="1" height="1" rx=".5" transform="rotate(-180 2 12)" fill={color} />
      <Rect x="8" y="8" width="1" height="1" rx=".5" transform="rotate(-180 8 8)" fill={color} />
      <Rect x="8" y="14" width="1" height="1" rx=".5" transform="rotate(-180 8 14)" fill={color} />
      <Rect x="2" y="8" width="1" height="1" rx=".5" transform="rotate(-180 2 8)" fill={color} />
      <Rect x="2" y="14" width="1" height="1" rx=".5" transform="rotate(-180 2 14)" fill={color} />
      <Rect x="10" y="8" width="1" height="1" rx=".5" transform="rotate(-180 10 8)" fill={color} />
      <Rect
        x="10"
        y="14"
        width="1"
        height="1"
        rx=".5"
        transform="rotate(-180 10 14)"
        fill={color}
      />
      <Rect x="12" y="8" width="1" height="1" rx=".5" transform="rotate(-180 12 8)" fill={color} />
      <Rect
        x="12"
        y="14"
        width="1"
        height="1"
        rx=".5"
        transform="rotate(-180 12 14)"
        fill={color}
      />
      <Rect x="6" y="8" width="1" height="1" rx=".5" transform="rotate(-180 6 8)" fill={color} />
      <Rect x="6" y="14" width="1" height="1" rx=".5" transform="rotate(-180 6 14)" fill={color} />
      <Rect x="4" y="8" width="1" height="1" rx=".5" transform="rotate(-180 4 8)" fill={color} />
      <Rect x="4" y="14" width="1" height="1" rx=".5" transform="rotate(-180 4 14)" fill={color} />
      <Rect x="8" y="6" width="1" height="1" rx=".5" transform="rotate(-180 8 6)" fill={color} />
      <Rect x="2" y="6" width="1" height="1" rx=".5" transform="rotate(-180 2 6)" fill={color} />
      <Rect x="8" y="4" width="1" height="1" rx=".5" transform="rotate(-180 8 4)" fill={color} />
      <Rect x="2" y="4" width="1" height="1" rx=".5" transform="rotate(-180 2 4)" fill={color} />
      <Rect
        x="14"
        y="10"
        width="1"
        height="1"
        rx=".5"
        transform="rotate(-180 14 10)"
        fill={color}
      />
      <Rect
        x="14"
        y="12"
        width="1"
        height="1"
        rx=".5"
        transform="rotate(-180 14 12)"
        fill={color}
      />
      <Rect x="14" y="8" width="1" height="1" rx=".5" transform="rotate(-180 14 8)" fill={color} />
      <Rect
        x="14"
        y="14"
        width="1"
        height="1"
        rx=".5"
        transform="rotate(-180 14 14)"
        fill={color}
      />
      <Rect x="14" y="6" width="1" height="1" rx=".5" transform="rotate(-180 14 6)" fill={color} />
      <Rect x="14" y="4" width="1" height="1" rx=".5" transform="rotate(-180 14 4)" fill={color} />
    </Svg>
  )
}

export default BorderTopIcon
