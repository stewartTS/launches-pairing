import styles from '../styles/Home.module.css';
import { useQuery } from 'react-query';
import { useState } from 'react';
import Card from '../Components/Card/Card';

const fetchCardData = async (): Promise<unknown> => {
  const payload = await fetch('https://api.spacexdata.com/v3/launches');
  return payload.json();
};

export default function Home() {
  const [cardData, setCardData] = useState(null);
  const { data, status } = useQuery({
    queryKey: ['cardData'],
    queryFn: fetchCardData,
    onSuccess(data) {
      setCardData(data);
    },
  });

  const renderCards = (allCardData) => {
    const topTen = allCardData?.slice(0, 10);
    return topTen?.map((flight) => <Card key={flight.flight_number} data={flight} />);
  };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1> Top 10 Flights</h1>
        <div className={styles.grid}>{renderCards(cardData)}</div>
      </main>
    </div>
  );
}
