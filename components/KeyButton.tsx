import React, { useState } from 'react'

interface KeyButtonProps {
  letter: string
  active: boolean
  onClick: any
}
const KeyButton: React.FC<KeyButtonProps> = ({ letter, onClick, active }) => {
  return (
    <button
      id={letter}
      value={letter}
      onClick={onClick}
      className={`w-10 h-10 text-white transition ease-out border-2 border-red-400 rounded-md  ${
        active ? 'bg-red-200' : ''
      }`}
    >
      {letter.toUpperCase()}
    </button>
  )
}

export default KeyButton
