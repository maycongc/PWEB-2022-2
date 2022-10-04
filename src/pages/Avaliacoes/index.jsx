import { Header } from '../../components/Header';

import styles from './styles.module.css';

function Avaliacoes() {
  return (
    <>
      <Header />
      <section className={styles['container-turmas']}>
        <main className={styles['conteudo-turmas']}>
          <h1>Turma: 101A</h1>
          <h2>Avaliações:</h2>

          <section>
            <a href="/avaliacao">
              <div className={styles.turma}>
                <p>
                  <strong>Código: </strong>
                  <span>001</span>
                </p>
                <p>
                  <strong>Nome: </strong>
                  <span>trabalho1</span>
                </p>
                <p>
                  <strong>última modificação: </strong>
                  <span>10/07/2022 13:26</span>
                </p>
              </div>
            </a>

            <a href="/avaliacao">
              <div className={styles.turma}>
                <p>
                  <strong>Código: </strong>
                  <span>002</span>
                </p>
                <p>
                  <strong>Nome: </strong>
                  <span>prova1</span>
                </p>
                <p>
                  <strong>última modificação: </strong>
                  <span>18/10/2022 15:32</span>
                </p>
              </div>
            </a>
          </section>
        </main>
      </section>
    </>
  );
}

export { Avaliacoes };
