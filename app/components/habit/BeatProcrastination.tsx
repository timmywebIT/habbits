'use client'

import { Button } from "@/app/components/ui/Button";
import { habitsStats } from "@/app/components/data/habits";

export function BeatProcrastination() {
    return (
        <section className="mt-60 flex gap-10">
       
        <div className="flex-1 max-w-lg">
          <span className="uppercase tracking-wide font-bold text-sm md:text-base text-green-200">Visualize your success</span>
          <h2 className="text-3xl md:text-4xl font-extrabold mt-4 text-gray-400">Beat procrastination</h2>
          <p className="text-gray-400 mt-5 w-[395px]">Visualize Habit suggests good habits to pick in 2025. Discover how habits compound over 1 year, or 10 years to be motivated to start!</p>
          <Button href="/dashboard" className="mt-7">
            Build my habits grid
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
            </svg>
          </Button>
        </div>
        <div className="flex-1">
          <div className="w-full max-w-4xl pl-10">
          <p className="text-gray-400 text-sm mb-2">Habits Grid example for 2025</p>
            <div className="habits-grid">
              {habitsStats.map((item, index) => (
                <div key={index} className={`p-4 rounded-xl text-white ${item.gradient}`}>
                  <h3 className="font-extrabold text-3xl">{item.title}</h3>
                  <p className="text-sm opacity-80">{item.desc}</p>
                  <p className="text-xs mt-2 opacity-70">{item.frequency}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
}