import Keyboard from '@/components/Keyboard'
import Display from '@/components/Display'
import { useState } from 'react'

const test = 'this is a string of text'

export default function Home() {
  const [text, setText] = useState<string[]>(test.split(''))
  const [input, setInput] = useState<string>('')

  return (
    <div className="">
      <h1 className="m-4 text-4xl text-white">Typer</h1>
      <h2 className="text-orange-400">{input}</h2>
      <Display text={text} />
      <Keyboard setInput={setInput} />
    </div>
  )
}
