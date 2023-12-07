import {createSlice, nanoid} from '@reduxjs/toolkit';
import { clearSearchTermAction } from '../action';


const itemsSlice = createSlice({
    name: 'items',
    initialState: {
        searchTerm: '',
        itemsData: []
    },
    reducers: {
        doSearchTerm(state, action){
            state.searchTerm = action.payload
        },
        removeItem(state, action){
            state.itemsData = state.itemsData.filter((item) => {
                return item.itemId !== action.payload;
            })
        },
        addItem(state, action){
            state.itemsData.push({
                itemName: action.payload.itemName,
                itemPrice: action.payload.itemPrice,
                itemId: nanoid()
            })
        },
    },
    extraReducers(builder){
        builder.addCase(clearSearchTermAction, (state, action) => {
            state.searchTerm = '';
        })
    }
});

export const {doSearchTerm, removeItem, addItem} = itemsSlice.actions;
export const itemsReducer = itemsSlice.reducer;