import { useSelector, useDispatch } from 'react-redux';

import styles from "./Carrinho.module.scss";
import { Header } from 'components/Header';
import { Item } from 'components/Item';
import { resetarCarrinho } from 'store/reducers/carrinho';


export const Carrinho = () => {
    const dispatch = useDispatch();
    const { carrinho, total } = useSelector(state => {
        const regexp = new RegExp(state.busca, 'i');
        let total = 0;
        const carrinhoReduce = state.carrinho
            .reduce((acc, cur) => {
                const item = state.itens.find(item => item.id === cur.id);
                total += item.preco * cur.quantidade;

                if (item.titulo.match(regexp)) {
                    acc.push({
                        ...item,
                        quantidade: cur.quantidade,
                    });
                }

                return acc;
            }, [])

        return {
            carrinho: carrinhoReduce,
            total
        };
    });

    return (
        <div>
            <Header
                titulo='Carrinho de compras'
                descricao='Confira produtos que você adicionou ao carrinho'
            />

            <div className={styles.carrinho}>
                {carrinho.map(item => <Item key={item.id} {...item} carrinho />)}

                <div className={styles.total}>
                    <strong>Resumo da compra</strong>

                    <span>
                        Subtotal: <strong>R$ {total.toFixed(2)}</strong>
                    </span>
                </div>

                <button className={styles.finalizar} onClick={() => {
                    console.log('Carrinho:', carrinho);
                    dispatch(resetarCarrinho());
                }}>
                    Finalizar carrinho
                </button>
            </div>
        </div>
    );
}