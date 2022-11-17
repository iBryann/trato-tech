import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Home } from 'pages/Home';
import { Categoria } from 'pages/Categoria';
import { PaginaPadrao } from 'components/PaginaPadrao';
import { Carrinho } from 'pages/Carrinho';


export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<PaginaPadrao />}>
                    <Route index element={<Home />} />
                    <Route path='/categoria/:nomeCategoria' element={<Categoria />} />
                    <Route path='/carrinho' element={<Carrinho />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}