import logo from '../../../assets/logo.png';

import styles from './styles.module.css';

function Header() {
  return (
    <header className={styles.container}>
      <div className={styles.conteudo}>
        <div>
          <img className={styles.logo} src={logo} alt="./logo.jpg" />
        </div>

        <div className={styles.textos}>
          <h1>NOME APP</h1>
          <p>TEXTO SECUNDARIO</p>
        </div>
      </div>
    </header>
  );
}

export { Header };
