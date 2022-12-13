import styles from './Modal.module.css';

interface Props {
  data: {
    details: string;
    mission_name: string;
  };
  toggleModal: Function;
}

export default function Modal({ data, toggleModal }: Props) {
  return (
    <div className={styles.modal}>
      <div className={styles.moverlay} onClick={() => toggleModal()}></div>
      <div className={styles.content}>
        <h2>{data.mission_name}</h2>
        <p>{data.details}</p>
        <button className={styles.close} onClick={() => toggleModal()}>
          close
        </button>
      </div>
    </div>
  );
}
