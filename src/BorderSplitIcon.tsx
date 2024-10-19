import React from 'react'
import Svg, { Path, Rect } from 'react-native-svg'
import { IconProps } from './types'

const BorderSplitIcon: React.FC<IconProps> = ({ width = 24, height = 24, color = 'black' }) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 15 15" fill="none">
      <Path
        d="M1 1.49994C1 1.2238 1.22386 0.999939 1.5 0.999939H6V1.99994H2V5.99994H1V1.49994ZM13 1.99994H9V0.999939H13.5C13.7761 0.999939 14 1.2238 14 1.49994V5.99994H13V1.99994ZM1 13.4999V8.99994H2V12.9999H6V13.9999H1.5C1.22386 13.9999 1 13.7761 1 13.4999ZM13 12.9999V8.99994H14V13.4999C14 13.7761 13.7761 13.9999 13.5 13.9999H9.5V12.9999H13Z"
        fill={color}
        clipRule="evenodd"
        fillRule="evenodd"
      />
      <Rect x="7" y="5.025" width="1" height="1" rx=".5" fill={color} />
      <Rect x="7" y="3.025" width="1" height="1" rx=".5" fill={color} />
      <Rect x="7" y="7.025" width="1" height="1" rx=".5" fill={color} />
      <Rect x="7" y="13.025" width="1" height="1" rx=".5" fill={color} />
      <Rect x="7" y="1.025" width="1" height="1" rx=".5" fill={color} />
      <Rect x="13" y="7.025" width="1" height="1" rx=".5" fill={color} />
      <Rect x="5" y="7.025" width="1" height="1" rx=".5" fill={color} />
      <Rect x="3" y="7.025" width="1" height="1" rx=".5" fill={color} />
      <Rect x="9" y="7.025" width="1" height="1" rx=".5" fill={color} />
      <Rect x="11" y="7.025" width="1" height="1" rx=".5" fill={color} />
      <Rect x="7" y="9.025" width="1" height="1" rx=".5" fill={color} />
      <Rect x="7" y="11.025" width="1" height="1" rx=".5" fill={color} />
      <Rect x="1" y="7.025" width="1" height="1" rx=".5" fill={color} />
    </Svg>
  )
}

export default BorderSplitIcon