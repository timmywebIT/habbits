'use client'

import { Main } from "@/app/components/sections/Main";
import { About } from "@/app/components/sections/About";
import { BeatProcrastination } from "@/app/components/habit/BeatProcrastination";

export default function Home() {
    return (
        <>
        <Main />
        <About />
        <BeatProcrastination />
        </>
    );
}
