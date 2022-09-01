import {createSlice} from "@reduxjs/toolkit"
import { SwatchColorPicker } from "office-ui-fabric-react";

const initialState = {
    name: 'Marcus',
    sobrenome: 'Dev',
    count: 0
}

const state = createSlice({
    name: 'state',
    initialState: initialState,
    reducers: {
        setName: (state, action) =>{
            state.name = action.payload
        },
        addCount: (state) => {
            if(state.count  < 5) {

                state.count ++
            }
        },
        removeCount: (state) => {
            if(state.count > 0) {

                state.count --
            }
        }
    }
})


export const {
    setName,
    addCount,
    removeCount
} = state.actions;

export default state.reducer;