import Keyboard from '@/components/Keyboard'
import Display from '@/components/Display'
import { useReducer, useState } from 'react'

const test = 'this is a string of text'

const initialInput = '123'

function inputReducer(state: string, action: { type: string; letter: string }) {
  switch (action.type) {
    case 'letterInput': {
      return state + action.letter
    }
    case 'backspace': {
      return state.slice(0, -1)
    }
    default: {
      return state
    }
  }
}

export default function Home() {
  const [text, setText] = useState<string[]>(test.split(''))
  const [input, setInput] = useState<string>('')
  const [state, dispatch] = useReducer(inputReducer, initialInput)

  return (
    <div className="">
      <h1 className="m-4 text-4xl text-white">Typer</h1>
      <p className="h-24 text-center text-orange-400 border-2 border-red-400 rounded-md">
        {input}
      </p>
      <h1 className="text-white">reducer test</h1>
      <p className="text-white border-2 border-purple-200">{state}</p>
      <Display text={text} />
      <Keyboard setInput={setInput} dispatch={dispatch} />
    </div>
  )
}
