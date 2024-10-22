import React from 'react'
import { Path, Svg } from 'react-native-svg'
import { IconProps } from './types.js'

const BoxModelIcon: React.FC<IconProps> = ({ width = 24, height = 24, color = 'black' }) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 15 15" fill="none">
      <Path
        d="M1.99998 0.999976C1.44769 0.999976 0.999976 1.44769 0.999976 1.99998V13C0.999976 13.5523 1.44769 14 1.99998 14H13C13.5523 14 14 13.5523 14 13V1.99998C14 1.44769 13.5523 0.999976 13 0.999976H1.99998ZM1.99998 1.99998L13 1.99998V13H1.99998V1.99998ZM4.49996 3.99996C4.22382 3.99996 3.99996 4.22382 3.99996 4.49996V10.5C3.99996 10.7761 4.22382 11 4.49996 11H10.5C10.7761 11 11 10.7761 11 10.5V4.49996C11 4.22382 10.7761 3.99996 10.5 3.99996H4.49996ZM4.99996 9.99996V4.99996H9.99996V9.99996H4.99996Z"
        fill={color}
        clipRule="evenodd"
        fillRule="evenodd"
      />
    </Svg>
  )
}

export default BoxModelIcon
