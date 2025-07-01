import { Session } from '@/_libs/type';
import { useTimerStore } from '@/store';
import { motion } from 'framer-motion';
import React from 'react';

type DurationButtonProps = {
  session: Session;
};

export default function DurationButton({
  session,
}: Readonly<DurationButtonProps>) {

  const currSession = useTimerStore((state)=> state.currSession)
  const handleDurationChange = useTimerStore((state)=> state.handleDurationChange)
  const isSelected = currSession === session;


  return (
    <motion.button
      onClick={() => handleDurationChange(session)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      animate={{
        backgroundColor: isSelected ? '#FFF7D6' : 'transparent',
        borderRadius: isSelected ? '999px' : '0px',
        boxShadow: isSelected ? '0 4px 8px rgba(0,0,0,0.1)' : 'none',
      }}
      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      className="px-4 py-3 text-midnight font-semibold transition-colors"
    >
      {session.name}
    </motion.button>
  );
}
