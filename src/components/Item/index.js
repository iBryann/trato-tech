import { FaCartPlus } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

import styles from "./Item.module.scss";
import { mudarFavorito } from 'store/reducers/itens';
import { mudarCarrinho } from 'store/reducers/carrinho';


const iconeProps = {
    size: 24,
    color: '#041833'
}

export const Item = (props) => {
    const {
        id,
        titulo,
        foto,
        preco,
        descricao,
        favorito
    } = props;
    const dispatch = useDispatch();
    const estaNoCarrinho = useSelector(state => state.carrinho.some(item => item.id === id));

    function resolverFavorito() {
        dispatch(mudarFavorito(id));
    }

    function resolverCarrinho() {
        dispatch(mudarCarrinho(id));
    }

    return (
        <div className={styles.item}>
            <div className={styles['item-imagem']}>
                <img src={foto} alt={titulo} />
            </div>

            <div className={styles['item-descricao']}>
                <div className={styles['item-titulo']}>
                    <h2>{titulo}</h2>
                    <p>{descricao}</p>
                </div>

                <div className={styles['item-info']}>
                    <div className={styles['item-preco']}>
                        R$ {preco.toFixed(2)}
                    </div>

                    <div className={styles['item-acoes']}>
                        {favorito
                            ? <AiFillHeart {...iconeProps} className={styles['item-acao']} color='#ff0000' onClick={resolverFavorito} />
                            : <AiOutlineHeart {...iconeProps} className={styles['item-acao']} onClick={resolverFavorito} />
                        }

                        <FaCartPlus
                            {...iconeProps}
                            color={estaNoCarrinho ? '#1875E8' : iconeProps.color}
                            className={styles['item-acao']}
                            onClick={resolverCarrinho}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}