import { getLodgment } from '@/api/fetchLodgment';
import { Lodgemnt } from '@/lib/types/lodgemnt';
import { useEffect, useState } from 'react';

const LodgmentList = () => {
  const [lodgments, setLodgments] = useState<Lodgemnt[]>([]);

  useEffect(() => {
    const fetchLodgments = async () => {
      const data = await getLodgment();
      setLodgments(data);
    };
    fetchLodgments();
  }, []);

  return (
    <>
      <h1>LodgmentList</h1>
      <ul>
        {lodgments.map((lodgment) => (
          <li key={lodgment.id}>
            <img src={lodgment.image} alt={lodgment.name} />
            <p>{lodgment.name}</p>
            <p>{lodgment.price}</p>
            <p>{lodgment.description}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default LodgmentList;
