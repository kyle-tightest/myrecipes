import React from 'react';
import './App.css';
import Tabs from './components/Tabs';
import Recipe from './components/Recipe';
import Pantry from './components/Pantry';
import Menu from './components/Menu';

function App() {
  return (
    <div className="App">
      <h1>MyRecipes</h1>
      <Tabs>
        <div label="Recipes">
          <Recipe />
        </div>
        <div label="Pantry">
          <Pantry />
        </div>
        <div label="Menu">
          <Menu />
        </div>
      </Tabs>
    </div>
  );
}

export default App;
