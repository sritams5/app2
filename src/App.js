import React from 'react';
import './App.css';
import ContactCard from './ContactCard'
function App() {
  return (
    <div style={{textAlign: "center"}}>
      <ContactCard contact={{img:"https://placekitten.com/200/140",heading:"Ronny",details:"Cuty kitten"}}/>
      <ContactCard contact={{img:"https://placekitten.com/200/286",heading:"Roja",details:"Fluffy kitten"}}/>
      <ContactCard contact={{img:"https://placekitten.com/200/139",heading:"Jacky",details:"Beauty kitten"}}/>
      <ContactCard contact={{img:"https://placekitten.com/200/138",heading:"Winny",details:"Fair kitten"}}/>
    </div>
  );
}

export default App;
