import { create } from "zustand";
import { Session, TimerStore } from "./_libs/type";


 const sessions = [
        // {
        //     name: 'test',
        //     focusTime: 10,
        //     breakTime: 5 ,
        // },
        {
            name: '30 mins',
            focusTime: 25 * 60,
            breakTime: 5 * 60,
        },
        {
            name: '1 hour',
            focusTime: 50 * 60,
            breakTime: 10 * 60,
        },
        {
            name: '1hr 30 mins',
            focusTime: 75 * 60,
            breakTime: 15 * 60,
        },
        {
            name: '2 hours',
            focusTime: 100 * 60,
            breakTime: 20 * 60,
        },
    ]

    export const useTimerStore = create<TimerStore>((set, get) => ({
  sessions,
  currSession: sessions[0],
  isRunning: false,
  isStarted: false,
  isFocusRunning: false,
  isBreakRunning: false,
  breakMusic: undefined,
  secondsLeft: sessions[0].focusTime,
  timerRef: { current: null as null | number },

  startFocusTimer: () => {
    const { secondsLeft, isRunning, timerRef, currSession, startBreakTimer } = get();

    if (isRunning || secondsLeft <= 0) return;

    set(() => ({
      isRunning: true,
      isStarted: true,
      isFocusRunning: true,
      secondsLeft: currSession.focusTime,
    }));

if(timerRef)
    timerRef.current = window.setInterval(() => {
      const { secondsLeft: current } = get();
      if (current <= 1) {
        clearInterval(timerRef.current!);
        timerRef.current = null;
        set(() => ({
          secondsLeft: 0,
          isRunning: false,
          isFocusRunning: false,
          isBreakRunning: true,
          
        }));
        startBreakTimer();
      } else {
        set((state) => ({ secondsLeft: state.secondsLeft - 1 }));
      }
    }, 1000);
  },

  pauseFocusTimer: () => {
    const { timerRef } = get();
    if (timerRef?.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
      set(() => ({ isRunning: false }));
    }
  },

  resetFocusTimer: () => {
    const { currSession, timerRef } = get();
    if (timerRef?.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    set(() => ({
      isRunning: false,
      isStarted: false,
      isFocusRunning: false,
      secondsLeft: currSession.focusTime,
    }));
  },

  startBreakTimer: () => {
    const { isFocusRunning, currSession, timerRef, resetFocusTimer } = get();
    if (isFocusRunning) return;

    set(() => ({
      isRunning: true,
    // isStarted: true,
      secondsLeft: currSession.breakTime,
    }));

    // Start break music
    const music = new Audio('/alarm-pomdoro.mp3');
    music.loop = true;
    music.volume = 0.5;
    music.play().catch(() => console.warn('Autoplay failed'));
    set(() => ({ breakMusic: music }));

if(timerRef)
    timerRef.current = window.setInterval(() => {
      const { secondsLeft: current, breakMusic } = get();
      if (current <= 1) {
        clearInterval(timerRef.current!);
        timerRef.current = null;

          // Stop break music
          breakMusic?.pause();
          if (breakMusic) breakMusic.currentTime = 0;
          set(() => ({ breakMusic: undefined }));

        set(() => ({
          isRunning: false,
          secondsLeft: 0,
          isStarted: false,
        }));
        resetFocusTimer();
      } else {
        set((state) => ({ secondsLeft: state.secondsLeft - 1 }));
      }
    }, 1000);
  },

  handleDurationChange: (payload: Session) => {
    const { timerRef } = get();
    if (timerRef?.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    set(() => ({
      currSession: payload,
      secondsLeft: payload.focusTime,
      isRunning: false,
      isStarted: false,
      isFocusRunning: false,
    }));
  },
}));
