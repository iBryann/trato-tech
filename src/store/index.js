import { configureStore } from '@reduxjs/toolkit';

import { itensReducer } from './reducers/itens';
import { carrinhoReducer } from './reducers/carrinho';
import { categoriasReducer } from './reducers/categorias';


export const store = configureStore({
    reducer: {
        itens: itensReducer,
        carrinho: carrinhoReducer,
        categorias: categoriasReducer,
    }
});