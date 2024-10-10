import React  from "react";
import Head from 'next/head'
import About from "../components/About";

export default function Home() {
  return (
    <>
    <div>
      <Head>
        <title>Bruno Nascimento - Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-4xl mx-auto mt-16 antialiased">
        <About/>
      </main>
    </div>
    </>
  )
}