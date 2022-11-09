import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PaginaPadrao } from 'components/PaginaPadrao';
import { Home } from 'pages/Home';


export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<PaginaPadrao />}>
                    <Route index element={<Home />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}