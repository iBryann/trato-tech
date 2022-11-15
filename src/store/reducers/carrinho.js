import { createSlice } from '@reduxjs/toolkit';


const carrinhoSlice = createSlice({
    name: 'carrinho',
    initialState: [],
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
        }
    }
});


export const carrinhoReducer = carrinhoSlice.reducer;
export const { mudarCarrinho } = carrinhoSlice.actions;