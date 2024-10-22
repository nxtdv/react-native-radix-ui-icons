import React from 'react'
import { Path, Svg } from 'react-native-svg'
import { IconProps } from './types'

const DividerHorizontalIcon: React.FC<IconProps> = ({
  width = 24,
  height = 24,
  color = 'black',
}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 15 15" fill="none">
      <Path
        d="M2 7.5C2 7.22386 2.22386 7 2.5 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H2.5C2.22386 8 2 7.77614 2 7.5Z"
        fill={color}
        clipRule="evenodd"
        fillRule="evenodd"
      />
    </Svg>
  )
}

export default DividerHorizontalIcon
