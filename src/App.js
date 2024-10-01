import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MyComponent = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    console.log("useEffect is running");

    // Récupération des données via l'API
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        console.log("Data fetched successfully:", response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error while getting data: ", error);
      });
  }, []);

  if (error) return <div>Error: {error}</div>;
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
