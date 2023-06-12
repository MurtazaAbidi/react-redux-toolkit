import {createSlice} from '@reduxjs/toolkit'
import {ordered as cakeOrdered} from '../cake/cakeSlice'

const initialState = {
    numOfIcecreams: 20,
}

const icecreamSlice = createSlice({
    name: 'icecream',
    initialState,
    reducers: {
        ordered: (state) => {
            state.numOfIcecreams--
        },
        restocked: (state, action) => {
            state.numOfIcecreams += action.payload
        }
    },
    // extraReducers: {
    //     ['cake/ordered'] : (state) => {
    //         state.numOfIcecreams--
    //     }
    // }

    // OR We can also do the same thing with the following code: 
    extraReducers: (builder) => {
        builder.addCase(cakeOrdered, (state) => {
            state.numOfIcecreams--
        })
    }
})

export default icecreamSlice.reducer
export const {ordered, restocked}  = icecreamSlice.actions