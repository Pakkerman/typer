import React from 'react'

const KEYS = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
]

const Keyboard = () => {
  return (
    <div className="flex flex-col space-y-2 ">
      {KEYS.map((letter) => (
        <button
          key={letter}
          className="w-10 h-10 text-white transition border-2 border-red-400 rounded-md hover:bg-red-500 "
        >
          {letter}
        </button>
      ))}
    </div>
  )
}

export default Keyboard
