export type Session = {
  name: string;
  focusTime: number;
  breakTime: number;
};

export type TimerStore = {
    sessions: Session[];
    currSession: Session;
    timerRef: { current: number | null };
    isRunning: boolean;
    isFocusRunning: boolean;
    isBreakRunning: boolean;
    secondsLeft: number;
    isStarted: boolean;
    breakMusic?: HTMLAudioElement;
    startFocusTimer: () => void;
    startBreakTimer: () => void;
    pauseFocusTimer: () => void;
    resetFocusTimer: () => void;
    handleDurationChange: (payload: Session) => void;
}