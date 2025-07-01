import { useTimerStore } from '@/store';
import { motion } from 'framer-motion';
import React from 'react';

export default function DurationControls() {
  const startFocusTimer = useTimerStore((state)=> state.startFocusTimer);
  const pauseTimer = useTimerStore((state)=> state.pauseFocusTimer)
  const resetTimer = useTimerStore((state)=> state.resetFocusTimer)
  const handleTimerStart = ()=> {
    startFocusTimer();
  }

  const isFocusRunning = useTimerStore((state)=> state.isFocusRunning)

  return (
    <motion.div
      className="flex gap-4 mb-2"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-peach text-midnight px-6 py-2 rounded-full shadow hover:bg-butter transition-all"
        onClick={handleTimerStart}
      >
        Start
      </motion.button>

      {
        isFocusRunning  ?
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-butter text-midnight px-6 py-2 rounded-full shadow hover:bg-peach transition-all"
        onClick={pauseTimer}
      >
        Pause
      </motion.button> : ''
      
      }
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={resetTimer}
        className="bg-mint text-midnight px-6 py-2 rounded-full shadow hover:bg-lavender transition-all"
      >
        Reset
      </motion.button>
    </motion.div>
  );
}

