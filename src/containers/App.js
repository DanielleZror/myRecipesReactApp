import React from 'react';
import './App.css';
import Nav from '../components/Navbar';
import CardsList from '../components/CardsList'

const filteredRobot=[{id:1,
                name: 'danielle',
                user: 'something'},
                {id:2,
                  name: 'danielle',
                  user: 'something'}]
function App() {
  return (
    <div >
      <header >
       <Nav />
       <CardsList robots ={filteredRobot} />
      </header>
    </div>
  );
}

export default App;
