import React, { useState, useEffect } from 'react';
import Count from './Count';


const DataComponent = ({ data }) => {
  return (
    <div>
      {data.map(item => (
        <p key={item.id}>{item.name}</p>
      ))}
    </div>
  );
};

const DataComponentWithLoading =Count(DataComponent);

const App = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate an API call
    setTimeout(() => {
      setData([{ id: 1, name: 'Item 1' }, { id: 2, name: 'Item 2' }]);
      setIsLoading(false);
    }, 2000);
  }, []);

  return <DataComponentWithLoading isLoading={isLoading} data={data} />;
};

export default App;
