'use client'

import { act, useState } from 'react';
import Stepper from '@/app/components/habit/Stepper';
import { DashboardHabit } from '@/app/components/habit/DashboardHabit';
import { Form } from '@/app/components/ui/Form';

export default function Dashboard() {

  const [activeStep, setActiveStep] = useState(1)

  return (
    <section className="p-5 mt-20 text-gray-300">
      <div className='flex gap-10'>
        <div>
          <Stepper activeStep={activeStep} setActiveStep={setActiveStep}></Stepper>
        </div>
        <div className='flex-1'>
          {activeStep === 1 && <DashboardHabit />}
          {activeStep === 2 && <div>Content for Step 2</div>}
          {activeStep === 3 && <div>Content for Step 3</div>}
        </div>
        <div>
        </div>
      </div>
      <Form></Form>
    </section>
  );
}