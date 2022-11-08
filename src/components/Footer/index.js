import styles from './Footer.module.scss';
import {
    FaFacebook,
    FaTwitter,
    FaInstagram
} from 'react-icons/fa';


const iconeProps = {
    color: 'white',
    size: 24
};

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div>
                <FaFacebook {...iconeProps} />
                <FaTwitter {...iconeProps} />
                <FaInstagram {...iconeProps} />
            </div>

            <span>
                Desenvolvido por Alura.
            </span>
        </footer>
    );
}