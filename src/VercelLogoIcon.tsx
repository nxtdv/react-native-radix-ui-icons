import React from 'react'
import { Path, Svg } from 'react-native-svg'
import { IconProps } from './types.js'

const VercelLogoIcon: React.FC<IconProps> = ({ width = 24, height = 24, color = 'black' }) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 15 15" fill="none">
      <Path
        d="M7.49998 1L6.92321 2.00307L1.17498 12L0.599976 13H1.7535H13.2464H14.4L13.825 12L8.07674 2.00307L7.49998 1ZM7.49998 3.00613L2.3285 12H12.6714L7.49998 3.00613Z"
        fill={color}
        clipRule="evenodd"
        fillRule="evenodd"
      />
    </Svg>
  )
}

export default VercelLogoIcon
