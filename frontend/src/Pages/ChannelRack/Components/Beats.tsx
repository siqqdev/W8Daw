import React, { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../Store/hooks';
import { currentArrangement, removeArrangementItem, setArrangementArray } from '../../../Store/playSlice';
import {ArrangementType} from '../../../../types'
import Beat from './Beat';

const Beats: React.FC<{ count: number; soundName: string; soundPath: string }> = ({ count, soundName, soundPath }) => {
    const [beats, setBeats] = useState<React.ReactNode[]>([]);
    const [arrangement, setArrangement] = useState<ArrangementType[]>([]);

    const dispatch = useAppDispatch()

    const currArrangement = useAppSelector(currentArrangement)

    useEffect(() => {
        setArrangement(currArrangement)
    }, [currArrangement])

    useEffect(() => {
        const newBeats = Array.from({ length: count }, (_, i) => (
            <Beat key={i} i={i} arrangement={arrangement} soundName={soundName} soundPath={soundPath}/>
        ));
        setBeats(newBeats);
    }, [count, arrangement, soundName, soundPath]);

    const handleBeatClick = (i: number, sound: string, soundPath: string) => {
        console.log('Before:',arrangement);
        
        const newBeat = { index: i, sound: sound, soundPath: soundPath };
        if (arrangement.some(item => (
            item.index === newBeat.index && 
            item.sound === newBeat.sound && 
            item.soundPath === newBeat.soundPath
        ))) {
            console.log('has');
            
            setArrangement(arrangement.filter(obj => obj.index !== i));
            console.log('after:', arrangement);
            dispatch(removeArrangementItem(i))
        } else {
            setArrangement((prev) => [...prev, newBeat]);
            dispatch(setArrangementArray(newBeat));
        }
    };
    

    return (
        <div className="flex gap-1">
            {beats.map((beat, i) => (
                <div key={i} onClick={() => handleBeatClick(i, soundName, soundPath)}>
                    {beat}
                </div>
            ))}
        </div>
    );
};

export default Beats;
