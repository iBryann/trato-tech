import styles from './busca.module.scss';


export const Busca = () => {
    return (
        <div className={styles.busca}>
            <input
                className={styles.input}
                placeholder="O que você busca"
            />
        </div>
    );
}