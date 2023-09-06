import {configureStore} from '@reduxjs/toolkit';
import Reducers from '../reducers/combineReducer';

const store = configureStore({
    reducer:{
        Tree : Reducers
    }
})

export default store;