import { useState } from 'react'
import Person from './components/Person'
import './App.css'

function App() {

  return (
    <div>
      <Person
        lastName={"Doe"}
        firstName={"Jane"}
        currentAge={45}
        hairColor={"Black"}
      />
      <Person
        lastName={"Smith"}
        firstName={"John"}
        currentAge={88}
        hairColor={"Brown"}
      />
    </div>
  );
}

export default App;
