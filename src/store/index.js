import { configureStore } from '@reduxjs/toolkit';

import { itensSlice } from './reducers/itens';
import { categoriasSlice } from './reducers/categorias';


export const store = configureStore({
    reducer: {
        itens: itensSlice,
        categorias: categoriasSlice
    }
});