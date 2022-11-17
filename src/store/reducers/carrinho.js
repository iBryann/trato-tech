import { createSlice } from '@reduxjs/toolkit';


const initialState = [];

const carrinhoSlice = createSlice({
    name: 'carrinho',
    initialState,
    reducers: {
        mudarCarrinho: (state, { payload }) => {
            const temItem = state.some(item => item.id === payload);

            if (temItem) {
                return state.filter(item => item.id !== payload);
            }

            return [
                ...state,
                {
                    id: payload,
                    quantidade: 1
                }
            ];
        },
        mudarQuantidade: (state, { payload }) => {
            const { id, quantidade } = payload;
            const item = state.find(item => item.id === id);

            if (item) item.quantidade += quantidade;
        },
        resetarCarrinho: () => initialState,
    }
});


export const carrinhoReducer = carrinhoSlice.reducer;
export const { mudarCarrinho, mudarQuantidade, resetarCarrinho } = carrinhoSlice.actions;