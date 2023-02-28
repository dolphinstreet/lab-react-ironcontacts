import React from 'react';
import { useState } from 'react'
import "./App.css";
import contactsArray from "./contacts.json"


function App() {

  const [contacts, setContacts] = useState(contactsArray.slice(0, 5));
  return <div className="App">
    <h1>IronContacts</h1>
    <table>
      <thead>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won an Oscar</th>
          <th>Won an Emmy</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map((actor) => {
          return (
            <tr key={actor.id}>
              <td><img src={actor.pictureUrl} alt={actor.name} /></td>
              <td>{actor.name}</td>
              <td>{actor.popularity}</td>
              {actor.wonOscar && <td>🏆</td>}
              {actor.wonEmmy ? <td>🏆</td> : <td></td>}
            </tr>
          )
        })}
      </tbody>
    </table>

  </div>;
}
export default App;

