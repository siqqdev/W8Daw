import { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../Store/hooks'
import { selectedBPM, selectedBars } from '../../../Store/settingsSlice'
import { currentArrangement, currentBeat, setCurrentBeat } from '../../../Store/playSlice'
import {Howl} from 'howler'
import { PlayIcon } from '@heroicons/react/24/solid'

const PlayButton = () => {

const [isPlaying, setIsPlaying] = useState<boolean>(false)

const BPM = useAppSelector(selectedBPM)
const BPMInterval = 60000 / BPM / 4
const bars = useAppSelector(selectedBars)
const arrangement = useAppSelector(currentArrangement)
const currentIndex = useAppSelector(currentBeat)
const dispatch = useAppDispatch()

const handlePlayButton = () => {
    if (!isPlaying) {
        let i = currentIndex;
        const playNextSound = () => {
            if (i < bars * 2) {
                const items = arrangement.filter((sound) => sound.index === i);
                items.forEach((item) => {
                    const newSound = new Howl({
                        src: item.soundPath,
                    });
                    newSound.play();
                });
                // console.log('playing:', i);
                i++;
                dispatch(setCurrentBeat(i))
                setTimeout(playNextSound, BPMInterval);
            } else {
                i = 0
                dispatch(setCurrentBeat(i))
                playNextSound()
            }
        };
        playNextSound();
    } else {
        setIsPlaying(false)
    }
};





  return (
    <button onClick={handlePlayButton}>
        <PlayIcon className='w-12 h-12' color='gray'/>
    </button>
  )
}

export default PlayButton