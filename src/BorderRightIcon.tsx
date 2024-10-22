import React from 'react'
import { Path, Svg, Rect } from 'react-native-svg'
import { IconProps } from './types.js'

const BorderRightIcon: React.FC<IconProps> = ({ width = 24, height = 24, color = 'black' }) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 15 15" fill="none">
      <Path
        d="M13.25 1L13.25 14L14.75 14L14.75 1L13.25 1Z"
        fill={color}
        clipRule="evenodd"
        fillRule="evenodd"
      />
      <Rect width="1" height="1" rx=".5" transform="matrix(0 1 1 0 5 7)" fill={color} />
      <Rect width="1" height="1" rx=".5" transform="matrix(0 1 1 0 5 13)" fill={color} />
      <Rect width="1" height="1" rx=".5" transform="matrix(0 1 1 0 3 7)" fill={color} />
      <Rect width="1" height="1" rx=".5" transform="matrix(0 1 1 0 3 13)" fill={color} />
      <Rect width="1" height="1" rx=".5" transform="matrix(0 1 1 0 7 7)" fill={color} />
      <Rect width="1" height="1" rx=".5" transform="matrix(0 1 1 0 1 7)" fill={color} />
      <Rect width="1" height="1" rx=".5" transform="matrix(0 1 1 0 7 13)" fill={color} />
      <Rect width="1" height="1" rx=".5" transform="matrix(0 1 1 0 1 13)" fill={color} />
      <Rect width="1" height="1" rx=".5" transform="matrix(0 1 1 0 7 5)" fill={color} />
      <Rect width="1" height="1" rx=".5" transform="matrix(0 1 1 0 1 5)" fill={color} />
      <Rect width="1" height="1" rx=".5" transform="matrix(0 1 1 0 7 3)" fill={color} />
      <Rect width="1" height="1" rx=".5" transform="matrix(0 1 1 0 1 3)" fill={color} />
      <Rect width="1" height="1" rx=".5" transform="matrix(0 1 1 0 7 9)" fill={color} />
      <Rect width="1" height="1" rx=".5" transform="matrix(0 1 1 0 1 9)" fill={color} />
      <Rect width="1" height="1" rx=".5" transform="matrix(0 1 1 0 7 11)" fill={color} />
      <Rect width="1" height="1" rx=".5" transform="matrix(0 1 1 0 1 11)" fill={color} />
      <Rect width="1" height="1" rx=".5" transform="matrix(0 1 1 0 9 7)" fill={color} />
      <Rect width="1" height="1" rx=".5" transform="matrix(0 1 1 0 9 13)" fill={color} />
      <Rect width="1" height="1" rx=".5" transform="matrix(0 1 1 0 11 7)" fill={color} />
      <Rect width="1" height="1" rx=".5" transform="matrix(0 1 1 0 11 13)" fill={color} />
      <Rect width="1" height="1" rx=".5" transform="matrix(0 1 1 0 5 1)" fill={color} />
      <Rect width="1" height="1" rx=".5" transform="matrix(0 1 1 0 3 1)" fill={color} />
      <Rect width="1" height="1" rx=".5" transform="matrix(0 1 1 0 7 1)" fill={color} />
      <Rect width="1" height="1" rx=".5" transform="matrix(0 1 1 0 1 1)" fill={color} />
      <Rect width="1" height="1" rx=".5" transform="matrix(0 1 1 0 9 1)" fill={color} />
      <Rect width="1" height="1" rx=".5" transform="matrix(0 1 1 0 11 1)" fill={color} />
    </Svg>
  )
}

export default BorderRightIcon
