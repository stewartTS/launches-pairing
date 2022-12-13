import styles from '../styles/Home.module.css';
import { useState } from 'react';
import Modal from './Modal/Modal';

export default function Card({ data }) {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <div className={styles.card}>
      <h2>{data.mission_name}</h2>
      <p>{data.launch_date_utc}</p>
      <img src={data.links.mission_patch_small} />
      <h3>Cores</h3>
      <ul>
        {data.rocket.first_stage.cores.map((core) => {
          return <li key={core.core_serial}>{core.core_serial}</li>;
        })}
      </ul>
      <h3>Payloads</h3>
      <ul>
        {data.rocket.second_stage.payloads.map((payload) => {
          return (
            <li key={payload.payload_id}>
              {payload.payload_id} : {payload.payload_type}
            </li>
          );
        })}
      </ul>
      <p className={data.launch_success ? styles.succesful : styles.unsuccesful}>
        {data.launch_success ? 'Succesful flight!' : 'Unsuccesful flight!'}
      </p>
      {data.details ? (
        <button className={styles.button} onClick={() => toggleModal()}>
          Details
        </button>
      ) : (
        <p>'No Details are available'</p>
      )}
      {modal && <Modal data={data} toggleModal={() => toggleModal()} />}
    </div>
  );
}
