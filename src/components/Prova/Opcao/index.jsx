import styles from './styles.module.css';

function Opcao(props) {
  const { texto } = props;

  return (
    <div className={styles.opcao}>
      <input type="checkbox" />
      <strong>{texto}</strong>
    </div>
  );
}

export { Opcao };
