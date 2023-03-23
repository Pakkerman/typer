import Keyboard from '@/components/Keyboard'
import Display from '@/components/Display'

export default function Home() {
  return (
    <div className="">
      <h1 className="m-4 text-4xl text-white">Typer</h1>
      <Display />
      <Keyboard />
    </div>
  )
}
