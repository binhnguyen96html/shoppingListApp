import {configureStore} from '@reduxjs/toolkit'
import { formReduce, addItemName, addItemPrice } from './slice/formSlice'
import { itemsReducer, doSearchTerm, removeItem, addItem} from './slice/itemsSlice'
import { clearSearchTermAction } from './action';

const store = configureStore({
   reducer: {
    form: formReduce,
    items: itemsReducer
   }
});


export {store, addItem, removeItem, doSearchTerm, addItemName, addItemPrice, clearSearchTermAction}

