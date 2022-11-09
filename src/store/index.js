import { configureStore } from '@reduxjs/toolkit';
import { categoriasSlice } from './reducers/categorias';


export const store = configureStore({
    reducer: {
        categorias: categoriasSlice
    }
});