import React, { useState, useEffect } from 'react'
import KeyButton from './KeyButton'

const FIRST_ROW = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']']
const SECOND_ROW = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'"]
const THIRD_ROW = ['z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/']

interface KeyboardProps {
  setInput: React.Dispatch<React.SetStateAction<string>>
}

const Keyboard: React.FC<KeyboardProps> = ({ setInput }) => {
  const [activeKey, setActiveKey] = useState<string[]>([])

  function handleClick(event: any) {
    const letter = event.target.value
    handleInput(letter)
  }

  function handleKeyDown(event: KeyboardEvent) {
    const letter = event.key
    handleInput(letter)
  }

  function handleInput(letter: string) {
    setInput((prev) => prev + letter)

    setActiveKey((prev) => [...prev, letter])
    setTimeout(
      () => setActiveKey((prev) => prev.filter((key) => key != letter)),
      100
    )
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
          <KeyButton
            key={letter}
            letter={letter}
            onClick={handleClick}
            active={activeKey.includes(letter)}
          />
        ))}
      </div>
      <div className="flex m-2 space-x-2 translate-x-[25px]">
        {SECOND_ROW.map((letter) => (
          <KeyButton
            key={letter}
            letter={letter}
            onClick={handleClick}
            active={activeKey.includes(letter)}
          />
        ))}
      </div>
      <div className="flex m-2 space-x-2 translate-x-[50px]">
        {THIRD_ROW.map((letter) => (
          <KeyButton
            key={letter}
            letter={letter}
            onClick={handleClick}
            active={activeKey.includes(letter)}
          />
        ))}
      </div>
    </div>
  )
}

export default Keyboard
