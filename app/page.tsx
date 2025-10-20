'use client'

import { Header } from "./components/sections/Header";
import { Main } from "./components/sections/Main";

export default function Home() {
    return (
        <main className="max-w-5xl mx-auto tracking-wide mb-4">
        <Header />
        <Main />
      </main>
    )
}
