'use client'

import { Button } from "@/app/components/ui/Button";

export function BeatProcrastination() {
    return (
        <section className="mt-60">
            <div>
                <span className="uppercase tracking-wide font-bold text-sm md:text-base text-green-200">Visualize your success</span>
                <h2 className="text-3xl md:text-4xl font-extrabold mt-4c text-gray-400 mt-4 ">Beat procrastination</h2>
                <p className="text-gray-400 mt-5 w-[395px]  ">Visualize Habit suggests good habits to pick in 2025. Discover how habits compound over 1 year, or 10 years to be motivated to start!</p>
                <Button className="mt-7">
                    Build my habits grid
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                    </svg>
                </Button>
            </div>
        </section>
    );
}