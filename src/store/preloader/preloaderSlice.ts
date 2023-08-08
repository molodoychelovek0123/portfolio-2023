import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from "@reduxjs/toolkit";

export const preloaderSlice = createSlice({
    name: 'preloader',
    initialState: {
        siteLoaded: false,
        preloaderDone: false,
        splineLoaded: false
    },
    reducers: {
        splineLoaded: (state) => {
            state.splineLoaded = true;
            if(state.preloaderDone) {
                state.siteLoaded = true;
            }
        },
        preloaderDone: (state) => {
            state.preloaderDone = true;
            if(state.splineLoaded){
                state.siteLoaded = true;
            }
        }
    },
})

export const {actions, reducer} = preloaderSlice;