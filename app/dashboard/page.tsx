'use client'

import Stepper from '@/app/components/habit/Stepper'

export default function Dashboard() {
  return (
    <section className="p-5 mt-20 text-gray-300">
      <div className='flex'>
        <div>
          <Stepper></Stepper>
        </div>
        <div>
          ЗДесь привычки
        </div>
      </div>
    </section>
  );
}