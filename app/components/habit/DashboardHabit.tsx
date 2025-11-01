'use client'

import { useState } from 'react'
import { dashboardHabit } from '@/app/components/data/habits'
import { Form } from '@/app/components/ui/Form';
import { FormMain } from '@/app/components/ui/Form';


interface DashboardHabitProps {
    activeStep: number;
    setActiveStep: React.Dispatch<React.SetStateAction<number>>;
}

export function DashboardHabit({ activeStep, setActiveStep }: DashboardHabitProps) {
    const [selectedHabit, setSelectedHabit] = useState<{ title: string; icon: string } | null>(null)
    const [availabeHabits, setAvailabeHabits] = useState(dashboardHabit)
    const [addedHabits, setAddedHabits] = useState<{ title: string; icon: string }[]>([])
    const [isFormOpen, setIsFormOpen] = useState(false)

    function handleAddHabit(habit: { title: string; icon: string }) {
        setAddedHabits(prev => [...prev, habit])
        setAvailabeHabits(prev => prev.filter(h => h.title !== habit.title))
        setSelectedHabit(null)
    }

    return (
        <section className="ml-10">
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2'>
                {availabeHabits.map((item, index) => (
                    <div key={index} onClick={() => setSelectedHabit(item)} className="p-4 cursor-pointer bg-base-200 rounded-2xl font-semibold flex gap-2 items-center hover:opacity-75 duration-200 ">
                        <span>{item.icon}</span>
                        <span>{item.title}</span>
                    </div>
                ))}
                <button onClick={() => { setIsFormOpen(true) }} className="p-4 col-span-full lg:col-span-4 cursor-pointer bg-base-200 rounded-2xl font-semibold flex gap-2 items-center justify-center hover:opacity-75 duration-200">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15"></path></svg>
                    Add new habit
                </button>
            </div>
            <div className="flex justify-between mt-6">
                <button onClick={() => setActiveStep(prev => Math.max(1, prev - 1))} className="flex text-sm items-center uppercase text-gray-400 font-bold p-4 bg-base-200 rounded-2xl opacity-50 cursor-pointer" disabled={activeStep === 3}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M15 10a.75.75 0 01-.75.75H7.612l2.158 1.96a.75.75 0 11-1.04 1.08l-3.5-3.25a.75.75 0 010-1.08l3.5-3.25a.75.75 0 111.04 1.08L7.612 9.25h6.638A.75.75 0 0115 10z" clipRule="evenodd"></path></svg>
                    Back
                </button>
                <button onClick={() => setActiveStep(prev => Math.min(3, prev + 1))} className="flex text-sm items-center uppercase text-gray-400 font-bold p-4 cursor-pointer bg-base-200 rounded-2xl hover:opacity-75 duration-200">Next
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z" clipRule="evenodd"></path></svg>
                </button>
            </div>

            {addedHabits.length > 0 && (
                <div className="mt-10 border-t border-gray-700 pt-4">
                    <h3 className="text-gray-400 text-sm font-semibold mb-2">Added Habits</h3>
                    <div className="flex flex-wrap gap-2">
                        {addedHabits.map((habit, idx) => (
                            <div key={idx} className="p-4 bg-base-200 rounded-2xl font-semibold flex gap-2 items-center">
                                <span>{habit.icon}</span>
                                <span>{habit.title}</span>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {selectedHabit && (
                <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">
                    <div className="relative">
                        <Form icon={selectedHabit.icon} title={selectedHabit.title} onCancel={() => setSelectedHabit(null)} onAdd={() => handleAddHabit(selectedHabit)} />
                    </div>
                </div>
            )}


            {isFormOpen && (
                <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">
                    <div className="relative"></div>
                    <FormMain
                        onCancel={() => setIsFormOpen(false)}
                        onAdd={() => setIsFormOpen(false)}
                    />

                </div>

            )}


        </section>
    );
}


