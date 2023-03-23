import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Keyboard from '@/components/Keyboard'

export default function Home() {
  return (
    <div className="">
      <h1 className="m-4 text-4xl text-white">Typer</h1>
      <Keyboard />
    </div>
  )
}
