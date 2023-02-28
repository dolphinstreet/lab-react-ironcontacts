import React from 'react';
import { useState } from 'react'
import "./App.css";
import allContacts from "./contacts.json"
const contactsArray= [...allContacts]
const firstFive = contactsArray.splice(0, 5);

function App() {

  const [contacts, setContacts] = useState(firstFive);

  const handleAddRandom = () => {
    if(!contactsArray.length){return}
    const randomContact = contactsArray.splice(Math.floor(Math.random() * contactsArray.length),1)[0]
    console.log(contactsArray, randomContact)
    setContacts([...contacts, randomContact])
    // if (!contacts.includes(randomContact)) {
    //   contacts.push(randomContact)
    // } else if (contacts.length !== contactsArray.length) {
    //   handleAddRandom()
    // }
  }

  return <div className="App">
    <h1>IronContacts</h1>
    <button onClick={handleAddRandom}>Add random contacts </button>
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

