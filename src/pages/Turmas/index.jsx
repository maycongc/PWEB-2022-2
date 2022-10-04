import { Header } from '../../components/Header';

import styles from './styles.module.css';

function Turmas() {
  return (
    <>
      <Header />
      <section className={styles['container-turmas']}>
        <main className={styles['conteudo-turmas']}>
          <h1>Turmas:</h1>

          <section>
            <a href="/avaliacoes">
              <div className={styles.turma}>
                <p>
                  <strong>Turma: </strong>
                  <span>101A</span>
                </p>
                <p>
                  <strong>Disciplina: </strong>
                  <span>Cálculo</span>
                </p>
                <p>
                  <strong>Alunos: </strong>
                  <span>32</span>
                </p>
                <p>
                  <strong>Dia da semana: </strong>
                  <span>Quarta-Feira</span>
                </p>
                <p>
                  <strong>Horário: </strong>
                  <span>10:40/12:20</span>
                </p>
              </div>
            </a>

            <a href="/avaliacoes">
              <div className={styles.turma}>
                <p>
                  <strong>Turma: </strong>
                  <span>101B</span>
                </p>
                <p>
                  <strong>Disciplina: </strong>
                  <span>Cálculo</span>
                </p>
                <p>
                  <strong>Alunos: </strong>
                  <span>41</span>
                </p>
                <p>
                  <strong>Dia da semana: </strong>
                  <span>Segunda-Feira</span>
                </p>
                <p>
                  <strong>Horário: </strong>
                  <span>10:40/12:20</span>
                </p>
              </div>
            </a>
          </section>
        </main>
      </section>
    </>
  );
}

export { Turmas };
