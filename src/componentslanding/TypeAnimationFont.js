import React from 'react'
import { TypeAnimation } from 'react-type-animation';

const TypeAnimationFont = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'We provide easy custom made forms',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'We provide multiple templates',
        1000,
        'We provide xyz for user easiness',
        1000,
        'We provide loreum impsum for user easiness',
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '3.5em', display: 'inline-block', fontWeight: 500 }}
      repeat={Infinity}
    />
  )
}

export default TypeAnimationFont