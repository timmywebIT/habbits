'use client'

import Stepper from '@/app/components/habit/Stepper';
import { DashboardHabit } from '@/app/components/habit/DashboardHabit';


export default function Dashboard() {
  return (
    <section className="p-5 mt-20 text-gray-300">
      <div className='flex'>
        <div>
          <Stepper></Stepper>
        </div>
        <div>
         <DashboardHabit></DashboardHabit>
        </div>
      </div>
    </section>
  );
}