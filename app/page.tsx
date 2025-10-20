'use client'

import { Main } from "./components/sections/Main";
import { About } from "./components/sections/About";
import { BeatProcrastination } from "./components/sections/BeatProcrastination";

export default function Home() {
    return (
        <>
        <Main />
        <About />
        <BeatProcrastination />
        </>
    );
}
