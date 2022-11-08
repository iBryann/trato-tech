import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PaginaPadrao } from 'components/PaginaPadrao';


export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<PaginaPadrao />}>
                    <Route index element={<div>home</div>} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}