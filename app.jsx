import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MyComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Récupération des données via l'API
    axios.get('http://localhost:3001/api/users')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error while getting data: ", error);
      });
  }, []);

  if (!data) return <div>Loading, please make me a coffee...</div>;

  return (
    <div>
      {/* Affichage des données récupérées */}
      {data.map(item => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
};

export default MyComponent;
