import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

interface SoundsArrayType {
    soundPath: string;
    soundName: string;
}

const initialState = {
    bpm: 100,
    bars: 8,
    soundsArray: [
    {
        soundName: 'kick',
        soundPath: '/kick.wav'
    },
    {
        soundName: 'clap',
        soundPath: '/clap.wav'
    },
    {
        soundName: 'hihat',
        soundPath: '/hihat.wav'
    },
    {
        soundName: 'snare',
        soundPath: '/snare.wav'
    }] as SoundsArrayType[]

};

const settingsSlice = createSlice({
    name: 'settings',
    initialState,
    reducers: {
        setBPM(state, action) {
            state.bpm = action.payload;
        },
        setBars(state, action) {
            state.bars = action.payload;
        },
        setNewSound(state, action) {
            state.soundsArray = [...state.soundsArray, action.payload];
        },
        deleteSound(state, action: PayloadAction<string>) {
            state.soundsArray = state.soundsArray.filter(item => item.soundPath !== action.payload)
        },
    }
});

export const { setBPM, setBars, setNewSound, deleteSound } = settingsSlice.actions;

export const selectedBPM = (state: RootState) => state.settings.bpm;
export const selectedBars = (state: RootState) => state.settings.bars;
export const selectedSoundsArray = (state: RootState) => state.settings.soundsArray;

export default settingsSlice.reducer;
