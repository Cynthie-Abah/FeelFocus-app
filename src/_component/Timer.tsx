import { formatTime } from '@/_libs/helper';
import { Session } from '@/_libs/type';
import { useTimerStore } from '@/store';
import React from 'react'

export default function Timer() {

  const currSessionRaw = useTimerStore((state) => state.currSession) as Session | null;
  const focusTime = currSessionRaw?.focusTime ?? 1500;
  const breakTime = currSessionRaw?.breakTime ?? 1500;
  const secondsLeft = useTimerStore((state) => state.secondsLeft);
  const isRunning = useTimerStore((state)=> state.isRunning)
  const isFocusRunning = useTimerStore((state)=> state.isFocusRunning)


  let progress;
  if(isFocusRunning){
 progress = (focusTime - secondsLeft) / (focusTime);
  }
  else{
     progress = (breakTime - secondsLeft) / (breakTime);
  }

  if(!isRunning) progress = 0
  

  const radius = 47;
  const CIRCUMFERENCE = 2 * Math.PI * radius;
  const strokeOffset = CIRCUMFERENCE * (1 - progress);
  console.log(secondsLeft);
  

  return (
     <div className="relative w-72 h-72 mb-2">
          {/* Progress Ring */}
          <svg className="absolute inset-0 w-full h-full transform -rotate-90 transition-all" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r={radius}
              fill="none"
              stroke="#f3e8ff"  // Background ring
              strokeWidth="5"
            />
            <circle
              cx="50"
              cy="50"
              r={radius}
              fill="none"
              stroke="#8b21f6"  // Progress ring color
              strokeWidth="5"
              strokeDasharray={CIRCUMFERENCE}
              strokeDashoffset={strokeOffset}
              strokeLinecap="round"
              className="transition-all duration-100"
            />
          </svg>

          {/* Timer Content */}
          <div className={`w-full h-full ${isFocusRunning  ? 'bg-lavender' : isRunning ? 'bg-peach' : 'bg-blush'} rounded-full flex flex-col items-center justify-center text-midnight shadow-inner ${isRunning ? 'animate-soft-pulse' : ''}`}>
            <span className="text-5xl font-bold">{formatTime(secondsLeft)}</span>
            <span className="text-sm mt-1 text-midnight/80">{!isFocusRunning && isRunning ?  'Break Time!' : 'Focus Session' }</span>
          </div>
     </div>
  )
}
