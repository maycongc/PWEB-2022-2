import { useNavigate } from 'react-router-dom';

import logo from '../assets/logo.png';
import seta from '../assets/esquerda.svg';

import styles from './header.module.css';

function Header() {
  const navigate = useNavigate();

  return (
    <header className={styles.container}>
      <div className={styles.conteudo}>
        <div className={styles['botao-voltar']}>
          <button type="button" onClick={() => navigate(-1)}>
            <img src={seta} alt="icone voltar" />
          </button>
        </div>

        <div className={styles.headerLogo}>
          <img src={logo} alt="logo" />
        </div>

        <div className={styles.headerContent}>
          <h2>NOME APP</h2>
        </div>
      </div>
    </header>
  );
}

export { Header };
