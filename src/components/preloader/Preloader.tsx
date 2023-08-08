import React from 'react';
import {useSelector} from 'react-redux'
import {RootState} from '@/store/store';

export const Preloader = () => {
    const isLoaded = useSelector((state: RootState) => state.preloaderReducer.value)

    return (
        <div>
            {isLoaded ? <> LOADED </> : <div>Loading...</div>}
        </div>

    )
}