import { useState, useRef, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../Store/hooks';
import { selectedBPM, selectedBars } from '../../../Store/settingsSlice';
import { currentArrangement, setCurrentBeat } from '../../../Store/playSlice';
import { Howl } from 'howler';
import { PlayIcon, StopIcon } from '@heroicons/react/24/solid';

const PlayButton = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [howls, setHowls] = useState<Howl[]>([]);
  const timeoutRef = useRef<number | undefined>(undefined);
  const currentIndex = useRef<number>(0);

  const BPM = useAppSelector(selectedBPM);
  const BPMInterval = 60000 / BPM / 4;
  const bars = useAppSelector(selectedBars);
  const arrangement = useAppSelector(currentArrangement);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!isPlaying) {
      currentIndex.current = 0;
    }
  }, [isPlaying, arrangement]);

  const handlePlayButton = () => {
    console.log(arrangement);
    
    if (!isPlaying) {
      setIsPlaying(true);

      const playNextSound = () => {
        if (currentIndex.current < bars * 2) {
          const items = arrangement.filter((sound) => sound.index === currentIndex.current);
          items.forEach((item) => {
            const newSound = new Howl({
              src: item.soundPath,
              format: ['wav']
            });
            newSound.play();
            setHowls((prev) => [...prev, newSound]);
          });
          console.log('playing:', currentIndex.current);
          dispatch(setCurrentBeat(currentIndex.current));
          currentIndex.current++;
          timeoutRef.current = window.setTimeout(playNextSound, BPMInterval);
        } else {
          currentIndex.current = 0;
          dispatch(setCurrentBeat(0));
          playNextSound()
        }
      };

      playNextSound();
    } else {
      setIsPlaying(false);
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
        timeoutRef.current = undefined;
        dispatch(setCurrentBeat(0))
      }
      howls?.forEach((howl) => {
        howl.stop()
        howl.unload();
      });
      setHowls([])
    }
  };

  return (
    <button onClick={handlePlayButton} className='active:scale-75 transition-all'>
      {
        isPlaying ? <StopIcon className='w-12 h-12' fill='#d4d4d4' />
        : <PlayIcon className='w-12 h-12' fill='#d4d4d4' />
      }
    </button>
  );
};

export default PlayButton;
