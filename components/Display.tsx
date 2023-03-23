import React, { useState } from 'react'

const Display = () => {
  const [text, setText] = useState('this is Text')

  return <div className="text-2xl text-center text-white">{text}</div>
}

export default Display
