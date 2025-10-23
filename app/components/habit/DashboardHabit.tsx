'use client'

import { dashboardHabit } from '@/app/components/data/habits'

export function DashboardHabit() {
    return (
        <section className="ml-10">
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2'>
                {dashboardHabit.map((item, index) => (
                    <div key={index} className="p-4 cursor-pointer bg-base-200 rounded-2xl font-semibold flex gap-2 items-center hover:opacity-75 duration-200 ">
                        <span>{item.icon}</span>
                        <span>{item.title}</span>
                    </div>
                ))}
                <button className="p-4 col-span-full lg:col-span-4 cursor-pointer bg-base-200 rounded-2xl font-semibold flex gap-2 items-center justify-center hover:opacity-75 duration-200">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15"></path></svg>
                    Add new habit
                </button>
            </div>
        </section>
    );
}