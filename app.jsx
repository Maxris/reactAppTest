import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MyComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Récupération des données via l'API
    axios.get('https://api.example.com/data')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des données:", error);
      });
  }, []);

  if (!data) return <div>Chargement...</div>;

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
