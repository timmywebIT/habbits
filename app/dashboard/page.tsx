// Dashboard.tsx
'use client'

import { useState } from 'react';
import Stepper from '@/app/components/habit/Stepper';
import { DashboardHabit } from '@/app/components/habit/DashboardHabit';
import { Button } from '@/app/components/ui/Button'

export default function Dashboard() {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <section className="p-5 mt-20 text-gray-300">
      <div className="flex gap-10">
        <Stepper activeStep={activeStep} setActiveStep={setActiveStep} />
        <div className="flex-1">
          {activeStep === 1 && <DashboardHabit activeStep={activeStep} setActiveStep={setActiveStep} />}
          {activeStep === 2 && (
            <div className='space-y-6'>
              <div >
                <span className="text-gray-400 text-xl font-black">Create at least a habit</span>
              </div>
              <Button  onClick={() => setActiveStep(1)}>Get Started</Button>
              <div className="flex space-x-5">
                <button className='flex text-sm items-center uppercase text-gray-400 font-bold p-4 cursor-pointer bg-base-200 rounded-2xl hover:opacity-75 duration-200' onClick={() => setActiveStep(prev => prev - 1)}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M15 10a.75.75 0 01-.75.75H7.612l2.158 1.96a.75.75 0 11-1.04 1.08l-3.5-3.25a.75.75 0 010-1.08l3.5-3.25a.75.75 0 111.04 1.08L7.612 9.25h6.638A.75.75 0 0115 10z" clipRule="evenodd"></path></svg>
                  Back</button>
                <button className='flex text-sm items-center uppercase text-gray-400 font-bold p-4 cursor-pointer bg-base-200 rounded-2xl hover:opacity-75 duration-200' onClick={() => setActiveStep(prev => prev + 1)}>Next 
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z" clipRule="evenodd"></path></svg>
                </button>
              </div>
            </div>
          )}
          {activeStep === 3 && (
             <div className='space-y-6'>
             <div >
               <span className="text-gray-400 text-xl font-black">Create at least a habit</span>
             </div>
              <Button  onClick={() => setActiveStep(1)}>Get Started</Button>
             <div className="flex space-x-5">
               <button className='flex text-sm items-center uppercase text-gray-400 font-bold p-4 cursor-pointer bg-base-200 rounded-2xl hover:opacity-75 duration-200' onClick={() => setActiveStep(prev => prev - 1)}>
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M15 10a.75.75 0 01-.75.75H7.612l2.158 1.96a.75.75 0 11-1.04 1.08l-3.5-3.25a.75.75 0 010-1.08l3.5-3.25a.75.75 0 111.04 1.08L7.612 9.25h6.638A.75.75 0 0115 10z" clipRule="evenodd"></path></svg>
                 Back</button>
               <button className='flex text-sm items-center uppercase text-gray-400 font-bold p-4 bg-base-200 rounded-2xl opacity-50 cursor-pointer' onClick={() => setActiveStep(prev => prev + 1)} disabled>Next 
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z" clipRule="evenodd"></path></svg>
               </button>
             </div>
           </div>
          )}
        </div>
      </div>
    </section>
  );
}
