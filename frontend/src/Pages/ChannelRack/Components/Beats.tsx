import React, { useState, useEffect } from 'react';
import { useAppDispatch } from '../../../Store/hooks';
import { setArrangementArray } from '../../../Store/playSlice';
import {ArrangementType} from '../../../../types'
import Beat from './Beat';

const Beats: React.FC<{ count: number; sound: string }> = ({ count, sound }) => {
    const [beats, setBeats] = useState<React.ReactNode[]>([]);
    const [arrangement, setArrangement] = useState<ArrangementType[]>([]);

    const dispatch = useAppDispatch()

    useEffect(() => {
        const newBeats = Array.from({ length: count }, (_, i) => (
            <Beat key={i} i={i} arrangement={arrangement} sound={sound} />
        ));
        setBeats(newBeats);
    }, [count, arrangement, sound]);

    const handleBeatClick = (i: number, sound: string) => {
        const newBeat = { index: i, sound: sound, soundPath: `/${sound}.wav` };
        setArrangement((prev) => [...prev, newBeat]);
        dispatch(setArrangementArray(newBeat));        
    };

    return (
        <div className="flex gap-1">
            {beats.map((beat, i) => (
                <div key={i} onClick={() => handleBeatClick(i, sound)}>
                    {beat}
                </div>
            ))}
        </div>
    );
};

export default Beats;
