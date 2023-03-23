import React, { useEffect } from 'react'
import KeyButton from './KeyButton'

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
const FIRST_ROW = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']']
const SECOND_ROW = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'"]
const THIRD_ROW = ['Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/']

const Keyboard = () => {
  function handleClick(event: any) {
    console.log('clicked ' + event.target.value)
  }

  function handleKeyDown(event: KeyboardEvent) {
    console.log('keyPressed', event.key)
  }
  useEffect(() => {
    document.addEventListener('keydown', (event) => handleKeyDown(event))

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return (
    <div className="relative" id="keyboard">
      <div className="flex m-2 space-x-2">
        {FIRST_ROW.map((letter) => (
          <KeyButton key={letter} letter={letter} onClick={handleClick} />
        ))}
      </div>
      <div className="flex m-2 space-x-2 translate-x-[25px]">
        {SECOND_ROW.map((letter) => (
          <KeyButton key={letter} letter={letter} onClick={handleClick} />
        ))}
      </div>
      <div className="flex m-2 space-x-2 translate-x-[50px]">
        {THIRD_ROW.map((letter) => (
          <KeyButton key={letter} letter={letter} onClick={handleClick} />
        ))}
      </div>
    </div>
  )
}

export default Keyboard
