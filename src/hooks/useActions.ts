import {useDispatch} from "react-redux";
import {useMemo} from "react";
import {bindActionCreators} from "redux";
import {actions as preloaderActions} from "@/store/preloader/preloaderSlice";

const rootActions = {
    ...preloaderActions
}

export const useActions = () =>{
    const dispatch = useDispatch()
    return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch]);
}