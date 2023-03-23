import React from 'react'

interface KeyButtonProps {
  letter: string
  onClick: any
}
const KeyButton: React.FC<KeyButtonProps> = ({ letter, onClick }) => {
  return (
    <button
      value={letter}
      onClick={onClick}
      id={letter}
      className="w-10 h-10 text-white transition border-2 border-red-400 rounded-md active:bg-red-100 hover:bg-red-500"
    >
      {letter}
    </button>
  )
}

export default KeyButton
