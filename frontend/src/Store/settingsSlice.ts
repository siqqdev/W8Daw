import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

const settingsSlice = createSlice({
    name: 'settings',
    initialState: {
        bpm: 100,
        bars: 8
    },
    reducers: {
        setBPM(state, action) {
            state.bpm = action.payload
        },
        setBars(state, action) {
            state.bars = action.payload
        }
    }
})

export const {setBPM, setBars} = settingsSlice.actions

export const selectedBPM = (state: RootState) => state.settings.bpm
export const selectedBars = (state: RootState) => state.settings.bars

export default settingsSlice.reducer