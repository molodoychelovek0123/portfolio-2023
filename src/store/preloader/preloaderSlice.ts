import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from "@reduxjs/toolkit";

export const preloaderSlice = createSlice({
    name: 'preloader',
    initialState: {
        value: false,
    },
    reducers: {
        siteLoaded: (state) => {
            state.value = true;
        }
    },
})

export const {actions, reducer} = preloaderSlice;