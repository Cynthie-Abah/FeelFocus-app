import Time from '@/_component/Time'
import { getAffirmations } from '@/_libs/api';
import React from 'react'

export default async function page() {
     const data = await getAffirmations()
  console.log(data);
  return (
      // add sound during actions
  //when you make it a pwa, add push notifications (e.g., “Break over, bestie!” 🌸)
  // add side toggle to switch between task and timer, 
      <main className="relative flex flex-col gap-[27px] row-start-2 items-center">

        {/* time */}
          <Time />

         {/* Affirmation */}
         {/* At the end of a session, display a cute animation with a motivational affirmation */}
        <p className="text-center text-lg italic max-w-xs text-foreground/80">
          {`“${data.text}” 🌷`}
        </p>

        {/* Tiny emoji mood tracker after each session → logs how the session felt (💪 focused, 😴 tired, 😡 distracted). */}
        {/* Mood Check-in Prompt */}
        <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm fle=x justify-center items-center hidden">
          <div className="max-w-sm w-full mx-auto p-6 bg-white/60 rounded-xl shadow-md text-center">
            <h2 className="font-bold text-lg mb-2">How did that session feel?</h2>
            <div className="flex justify-center gap-4 text-2xl mt-4">
              <button className="hover:scale-110 transition" title="Focused 💪">💪</button>
              <button className="hover:scale-110 transition" title="Sleepy 😴">😴</button>
              <button className="hover:scale-110 transition" title="Distracted 😵">😵</button>
              <button className="hover:scale-110 transition" title="Chill 😊">😊</button>
            </div>
          </div>
        </div> 

         {/* Hours Worked */}
      <div className="text-center text-sm mb-2">
        ⏱ We will notify you once it is break time ☺️
      </div>

        </main>
  )
}
