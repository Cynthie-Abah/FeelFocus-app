"use client"
import DurationSelector from './DurationSelector'
import Timer from './Timer'
import DurationControls from './DurationControls';

export default function Time() {
  return (
    <>
    {/* time customizations */}
        <DurationSelector />

        {/* Timer Circle */}
        <Timer  />

        {/* Controls */}
        <DurationControls />
    </>
  )
}


// "use client"
// import React, { useRef, useState } from 'react'
// import DurationSelector from './DurationSelector'
// import Timer from './Timer'
// import DurationControls from './DurationControls';
// import { useTimerStore } from '@/store';

// export default function Time() {
// // using zunstand syntax
//   const isrunning = useTimerStore((state)=> state.isRunning)

//     const [selected, setSelected] = useState<number>(30);
//      const focusTime = selected * 60; 
//       const [secondsLeft, setSecondsLeft] = useState(focusTime);
//       const [isRunning, setIsRunning] = useState(false);
//       const timerRef = useRef<NodeJS.Timeout | null>(null);

//       const handleDurationChange = (val: number) => {
//         setSelected(val);
//         if (!isRunning) setSecondsLeft(val * 60);
//       };

//       // Format seconds into MM:SS
//       

//       // Start the timer
//       const startTimer = () => {
//         if (isRunning || secondsLeft <= 0) return;

//         setIsRunning(true);
//         timerRef.current = setInterval(() => {
//           setSecondsLeft((prev) => {
//             if (prev <= 1) {
//               clearInterval(timerRef.current!);
//               setIsRunning(false);
//               return 0;
//             }
//             return prev - 1;
//           });
//         }, 1000);
//       };

//       // Pause the timer
//       const pauseTimer = () => {
//       if (timerRef.current) {
//         clearInterval(timerRef.current);
//         timerRef.current = null;
//         setIsRunning(false);
//       }
//     };

//       //  reset the timer
//       const resetTimer = () => {
//         clearInterval(timerRef.current!);
//         setSecondsLeft(focusTime);
//         setIsRunning(false);
//       };
//   return (
//     <>
//     {/* time customizations */}
//         <DurationSelector 
//         selected={selected} 
//         onDurationChange={handleDurationChange} />

//         {/* Timer Circle */}
//         <Timer 
//         isRunning={isRunning}
//         time={formatTime(secondsLeft)}
//         progress={(selected * 60 - secondsLeft) / (selected * 60)} />

//         {/* Controls */}
//         <DurationControls 
//         resetTimer={resetTimer} 
//         startTimer={startTimer} 
//         pauseTimer={pauseTimer}
//        />
//     </>
//   )
// }
