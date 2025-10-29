// Dashboard.tsx
'use client'
import { useState } from 'react';
import Stepper from '@/app/components/habit/Stepper';
import { DashboardHabit } from '@/app/components/habit/DashboardHabit';

export default function Dashboard() {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <section className="p-5 mt-20 text-gray-300">
      <div className="flex gap-10">
        <Stepper activeStep={activeStep} setActiveStep={setActiveStep} />
        <div className="flex-1">
          {activeStep === 1 && <DashboardHabit activeStep={activeStep} setActiveStep={setActiveStep} />}
          {activeStep === 2 && (
            <div>
              Content for Step 2
              <div className="flex justify-between mt-6">
                <button onClick={() => setActiveStep(prev => prev - 1)}>Back</button>
                <button onClick={() => setActiveStep(prev => prev + 1)}>Next</button>
              </div>
            </div>
          )}
          {activeStep === 3 && (
            <div>
              Content for Step 3
              <div className="flex justify-between mt-6">
                <button onClick={() => setActiveStep(prev => prev - 1)}>Back</button>
                <button onClick={() => setActiveStep(prev => prev + 1)}>Next</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
