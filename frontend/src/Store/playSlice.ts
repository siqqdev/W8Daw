import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';

interface ArrangementType {
    index: number;
    sound: string;
    soundPath: string;
}

interface PlayState {
    current: number;
    arrangement: ArrangementType[];
}

const initialState: PlayState = {
    current: 0,
    arrangement: []
};

const playSlice = createSlice({
    name: 'play',
    initialState,
    reducers: {
        setCurrentBeat(state, action: PayloadAction<number>) {
            state.current = action.payload;
        },
        setArrangementArray(state, action: PayloadAction<ArrangementType>) {
            state.arrangement = [...state.arrangement, action.payload];
        },
        removeArrangementItem(state, action: PayloadAction<number>) {
            state.arrangement = state.arrangement.filter(item => item.index !== action.payload);
        }
    }
});

export const { setCurrentBeat, setArrangementArray,removeArrangementItem } = playSlice.actions;

export const currentBeat = (state: RootState) => state.play.current;
export const currentArrangement = (state: RootState) => state.play.arrangement

export default playSlice.reducer;
