import {createSlice} from '@reduxjs/toolkit'

const slice = createSlice({
    name:"user",
    initialState:[{}],
    reducers:{
        getUser:(state) => {
            state.push({name:"Lil kid"})
            state.push({name:"Big kid"})
        }
    },

})

export default slice.reducer;

export const{getUser} = slice.actions;