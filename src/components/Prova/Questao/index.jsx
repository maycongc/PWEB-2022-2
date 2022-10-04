import { Opcao } from '../Opcao';

import styles from './styles.module.css';

function Questao(props) {
  const { numeroQuestao } = props;

  return (
    <div className={styles.questao}>
      <p>
        <div className={styles.enunciado}>
          <strong>Questão {numeroQuestao}: </strong>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </span>
        </div>
      </p>

      <Opcao texto="Opção A" />
      <Opcao texto="Opção B" />
      <Opcao texto="Opção C" />
      <Opcao texto="Opção D" />
    </div>
  );
}

export { Questao };
