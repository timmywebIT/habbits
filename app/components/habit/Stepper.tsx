'use client'

import { useState } from 'react'

interface StepperProps {
  activeStep: number
  setActiveStep: (step: number) => void
}

export default function Stepper({activeStep, setActiveStep}: StepperProps) {
  const steps = [
    { id: 1, label: 'Pick habits' },
    { id: 2, label: 'See results' },
    { id: 3, label: 'Reach goals' },
  ]

  return (
    <div className="flex flex-col items-start">
      {steps.map((step, index) => {
        
        const isActive = step.id <= activeStep
        const isLast = index === steps.length - 1

        return (
          <div key={step.id} className="flex items-start">
            <div className="flex flex-col items-center mr-3">
              <button
                onClick={() => setActiveStep(step.id)}
                className={`flex items-center justify-center cursor-pointer w-8 h-8 rounded-full text-white text-sm font-semibold transition-colors
                ${isActive ? 'bg-violet-600' : 'bg-gray-700 hover:bg-gray-400'}`}
              >
                {step.id}
              </button>
              {!isLast && (
                <div
                  className={`w-1 h-8 transition-colors duration-300 ${
                    step.id < activeStep ? 'bg-violet-600' : 'bg-gray-700'
                  }`}
                />
              )}
            </div>
            <span
              className={`text-sm transition-colors font-bold whitespace-nowrap   ${
                isActive ? 'text-gray-400' : 'text-gray-400'
              }`}
            >
              {step.label}
            </span>
          </div>
        )
      })}
    </div>
  )
}
