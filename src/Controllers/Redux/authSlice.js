import {createSlice} from '@reduxjs/toolkit';

const Slice = createSlice({
    name:"auth",
    initialState: {
        admin:false,
        loggedIn:false
    },
    reducers: {
        signIn:(state,action) => {
            const {name,password} = action.payload;
            state.LoggedIn = true;
            state.Admin = true;
        },
        signOut:(state) => {
            state.LoggedIn = false;
            state.Admin = false;
        },
        createUser:(state,action) => {

        }
    }
});

export default Slice.reducer;
export const {signIn,signOut,createUser} = Slice.actions;