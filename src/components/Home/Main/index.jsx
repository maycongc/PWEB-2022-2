import { Link } from 'react-router-dom';

import alunoIcon from '../../../assets/aluno.svg';
import professorIcon from '../../../assets/professor.svg';

import styles from './styles.module.css';

function Main() {
  function handleLogin(event) {
    event.preventDefault();
  }

  return (
    <main className={styles.principal}>
      <div className={styles.acoes}>
        <Link
          to="/turmas"
          className={styles.acaoItem + ' ' + styles.acaoVermelho}
        >
          <img src={professorIcon} alt="Icone de professor" />
          <p>Professor</p>
        </Link>

        <Link
          to="/turmas"
          className={styles.acaoItem + ' ' + styles.acaoHover}
          onClick={handleLogin}
        >
          <img src={alunoIcon} alt="Icone de aluno" />
          <p>Aluno</p>
        </Link>
      </div>
    </main>
  );
}

export { Main };
