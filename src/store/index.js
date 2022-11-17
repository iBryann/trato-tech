import { configureStore } from '@reduxjs/toolkit';

import { itensReducer } from './reducers/itens';
import { carrinhoReducer } from './reducers/carrinho';
import { categoriasReducer } from './reducers/categorias';
import { buscaReducer } from './reducers/busca';


export const store = configureStore({
    reducer: {
        itens: itensReducer,
        busca: buscaReducer,
        carrinho: carrinhoReducer,
        categorias: categoriasReducer,
    }
});