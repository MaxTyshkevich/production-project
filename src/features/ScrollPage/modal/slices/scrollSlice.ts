import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ScrollPageSchema } from '../types/ScrollPageSchema';

const initialState:ScrollPageSchema = {
    scrolls: {},
};

const scrollSlice = createSlice({
    name: 'scrolls',
    initialState,

    reducers: {
        setScrollPosition: (state, { payload }: PayloadAction<{ path: string; position: number }>) => {
            state.scrolls[payload.path] = payload.position;
        },
    },
});

export const { actions: scrollAction, reducer: scrollReducer } = scrollSlice;
