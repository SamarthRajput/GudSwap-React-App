import { useEffect, useState } from 'react';
import './App.css';
import AnimalsData from './Animal.json';
import { ProgressBar } from './components/ProgessBar';

function App() {
  const [animals, setAnimals] = useState([]);
  const [totalCount, setTotalCount] = useState(0);

  //fetch the data from the Animal.json file
  useEffect(() => {
    setAnimals(AnimalsData.animals);
  }, []);

  function handleReset() {
    // reset all the counts for all the animals
    setAnimals((prevAnimals) =>
      prevAnimals.map((animal) => ({ ...animal, count: 0 }))
    );

    // reset the tota count
    setTotalCount(0);
  }

  const handleCounter = (id, value) => {
    // Update the count for the specific animal
    const updatedAnimals = animals.map((animal) => {
      if (animal.id === id) {
        // Increment or decrement the count, ensuring it doesn't go below 0
        const newCount = Math.max((animal.count || 0) + value, 0);
        return { ...animal, count: parseFloat(newCount.toFixed(2))};
      }
      return animal;
    });
  
    // Calculate the new total count
    const newTotalCount = updatedAnimals.reduce((total, animal) => total + (animal.count || 0), 0);
  
    // Update the state with the new animals and total count
    setAnimals(updatedAnimals);
    setTotalCount(parseFloat(newTotalCount.toFixed(2)));
  };

  
  return (
    <div>
      <h2>GudSwap Army Builder</h2>
      {/* ProgressBar is not working */}
      <ProgressBar totalCount={totalCount} maxUnit={15} />
      <div>Total Count = {totalCount}</div>

      <button onClick={handleReset} disabled={totalCount === 0} className=''>Reset</button>

    {/* Rendering all the animals on the page */}
      <div>
        {animals.map((animal) => (
          <div key={animal.id}>
            <h2>{animal.name}</h2>
            <button onClick={() => handleCounter(animal.id, animal.unitValue)}> + </button>
            <div>{animal.count || 0}</div>
            <button onClick={() => handleCounter(animal.id, -animal.unitValue)}> - </button>
            <div>
              <img src={animal.imageUrl} alt={animal.name} />
            </div>
          </div>
        ))}
      </div>


    </div>
  );
}

export default App;
