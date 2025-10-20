'use client'

import { HabitBlock } from "@/app/components/habit/HabitBlock";
import { HabitStats } from "@/app/components/habit/HabitStats";
import { useHabit } from "@/app/hooks/useHabit";
import { Button } from "@/app/components/ui/Button";

export function Main() {
    
    const { habit, stats, shuffle } = useHabit();

    return (
        <section className="p-4 flex flex-col md:flex-row gap-50 md:pt-35">
            <div>
                <h1 className="text-gray-400 text-5xl font-black mb-10 w-[500px]">Find tiny habits to crush 2025</h1>
                <p className="text-gray-400 mb-15 text-lg w-[500px]">Discover how much you will achieve in a year with our free calculator!</p>
                <Button>
                    Build my habits list
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                    </svg>
                </Button>
            </div>
            <div className="relative">
                <div className="text-gray-400 absolute -top-10 w-[500px] flex">
                    <p>Mini habits...</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 mt-3 ml-0.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6 9 12.75l4.286-4.286a11.948 11.948 0 0 1 4.306 6.43l.776 2.898m0 0 3.182-5.511m-3.182 5.51-5.511-3.181" />
                    </svg>
                </div>
                <HabitBlock {...habit} />
                <HabitStats {...stats} />
                <div className="text-center mt-4">
                    <button onClick={shuffle} className="btn btn-ghost gap-3 fill-base-content border-none rounded-xl hover:bg-gray-700 uppercase text-gray-400 ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 animate-spin" viewBox="0 0 448 512">
                            <path fill="gray" d="M384 32H64C28.65 32 0 60.65 0 96v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96c0-35.35-28.65-64-64-64zm16 384c0 8.82-7.18 16-16 16H64c-8.82 0-16-7.18-16-16V96c0-8.82 7.18-16 16-16h320c8.82 0 16 7.18 16 16v320zM128 128c-17.67 0-32 14.33-32 32s14.33 32 32 32 32-14.33 32-32-14.33-32-32-32zm96 96c-17.67 0-32 14.33-32 32s14.33 32 32 32 32-14.33 32-32-14.33-32-32-32zm-96 96c-17.67 0-32 14.33-32 32s14.33 32 32 32 32-14.33 32-32-14.33-32-32-32zm192-192c-17.67 0-32 14.33-32 32s14.33 32 32 32 32-14.33 32-32-14.33-32-32-32zm0 192c-17.67 0-32 14.33-32 32s14.33 32 32 32 32-14.33 32-32-14.33-32-32-32z"></path>
                        </svg>
                        Shuffle habits
                    </button>
                </div>
            </div>
        </section>      
    )
}

