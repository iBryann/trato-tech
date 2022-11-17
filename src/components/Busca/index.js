import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { mudarBusca, resetarBusca } from 'store/reducers/busca';
import styles from './busca.module.scss';


export const Busca = () => {
    const busca = useSelector(state => state.busca);
    const dispatch = useDispatch();
    const location = useLocation();

    useEffect(() => {
        dispatch(resetarBusca());
    }, [location.pathname, dispatch]);

    return (
        <div className={styles.busca}>
            <input
                className={styles.input}
                placeholder="O que você busca"
                value={busca}
                onChange={event => dispatch(mudarBusca(event.target.value))}
            />
        </div>
    );
}