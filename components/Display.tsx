import React, { useState } from 'react'

interface DisplayProps {
  text: string[]
}

const Display: React.FC<DisplayProps> = ({ text }) => {
  console.log(text)
  return <div className="text-2xl text-center text-white">{text.join('')}</div>
}

export default Display
