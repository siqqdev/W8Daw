import { useState } from 'react'
import { useAppSelector } from '../../../Store/hooks'
import { selectedBPM, selectedBars } from '../../../Store/settingsSlice'
import { currentArrangement } from '../../../Store/playSlice'
import {Howl} from 'howler'

const PlayButton = () => {

const [isPlaying, setIsPlaying] = useState<boolean>(false)

const BPM = useAppSelector(selectedBPM)
const BPMInterval = 60000 / BPM / 4
const bars = useAppSelector(selectedBars)
const arrangement = useAppSelector(currentArrangement)

const handlePlayButton = () => {
    if (isPlaying) {
        setIsPlaying(false);
    } else {
        let i = 0;
        const playNextSound = () => {
            if (i < bars * 2) {
                const items = arrangement.filter((sound) => sound.index === i);
                items.forEach((item) => {
                    const newSound = new Howl({
                        src: item.soundPath,
                    });
                    newSound.play();
                });
                console.log('playing:', i);
                i++;
                setTimeout(playNextSound, BPMInterval);
            } else {
                i = 0
                playNextSound()
            }
        };
        playNextSound();
    }
};





  return (
    <button className='border p-2' onClick={handlePlayButton}>
        Play
    </button>
  )
}

export default PlayButton