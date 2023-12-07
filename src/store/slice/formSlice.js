
import {createSlice} from '@reduxjs/toolkit'
import { addItem } from './itemsSlice';


const formSlice = createSlice({
    name: 'form',
    initialState: {
        itemName: '',
        itemPrice: 0
    },
    reducers: {
        addItemName(state, action){
            state.itemName = action.payload;
        },
        addItemPrice(state, action){
            state.itemPrice = action.payload;
        },
    },
    extraReducers(builder){
        builder.addCase(addItem, (state, action) => {
            state.itemName = '';
            state.itemPrice = '';
        })
    }
});

export const {addItemName, addItemPrice} = formSlice.actions;
export const formReduce = formSlice.reducer;