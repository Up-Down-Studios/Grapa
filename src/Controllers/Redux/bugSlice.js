import {createSlice} from '@reduxjs/toolkit';
import {retrieveBugs} from '../BugController'

const slice = createSlice({
    name:"bug",
    initialState:[],
    reducers:{
        getBugs:state => retrieveBugs(),

        createBugs:(state,actions) => {

        },
        updateBugs:(state,actions) => {

        },
        markComplete:(state,actions) => {

        }
    }
})

export default slice.reducer;

export const {getBugs, createBugs, updateBugs, markComplete} = slice.actions;