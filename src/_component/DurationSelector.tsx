import { motion } from 'framer-motion';
import DurationButton from './DurationButton';
import { useTimerStore } from '@/store';
import { Session } from '@/_libs/type';



export default function DurationSelector() {
  const sessions = useTimerStore((state) => state.sessions) as Session[];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="max-w-full mx-auto mt-4 p-4 bg-white/40 backdrop-blur rounded-xl shadow-md"
    >
      <h2 className="font-bold text-lg mb-4 text-center">
        🕒 Select Session Duration
      </h2>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
        className="flex justify-evenly gap-4 bg-foreground/25 rounded-full"
      >
        {sessions.map((value) => (
            <motion.div
            key={value.name}
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            >
            <DurationButton session={value}/>
            </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
