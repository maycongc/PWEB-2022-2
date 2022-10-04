import { Header } from '../../components/Header';
import { Questao } from '../../components/Prova/Questao';

import styles from './styles.module.css';

function Avaliacao() {
  return (
    <>
      <Header />
      <section className={styles['container-prova']}>
        <main className={styles['conteudo-prova']}>
          <h1>Avaliação: 001 - trabalho1</h1>

          <section>
            <Questao numeroQuestao="1" />
            <Questao numeroQuestao="2" />
            <Questao numeroQuestao="3" />

            <div>
              <button type="submit">Finalizar</button>
              <button type="button">Ver gabarito</button>
            </div>
          </section>
        </main>
      </section>
    </>
  );
}

export { Avaliacao };
