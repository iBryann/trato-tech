import classNames from 'classnames';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { RiShoppingCart2Line, RiShoppingCartFill } from 'react-icons/ri';

import styles from './navbar.module.scss';
import { Busca } from 'components/Busca';
import { ReactComponent as Logo } from '../../assets/logo.svg';


const iconeProps = {
    color: 'white',
    size: 24
}

export const Navbar = () => {
    const location = useLocation();
    const navigate = useNavigate();

    return (
        <div className={styles.nav}>
            <Logo className={styles.logo} onClick={() => navigate('/')} />

            <div className={styles.links}>
                <div>
                    <Link to='/' className={classNames(styles.link, {
                        [styles.selected]: location.pathname === '/'
                    })}>
                        Página inicial
                    </Link>
                </div>
            </div>

            <div className={styles.busca}>
                <Busca />
            </div>

            <div className={styles.icones}>
                <Link to='/carrinho'>
                    {location.pathname === '/carrinho'
                        ? <RiShoppingCartFill {...iconeProps} />
                        : <RiShoppingCart2Line {...iconeProps} />
                    }
                </Link>
            </div>
        </div>
    );
}