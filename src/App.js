// Imports

import './App.css';
import React, { useState } from 'react';
import prodContacts from '../src/contacts.json';


// Main function

function App() {
  // Declaring State & getting first 5 contacts

  const [contacts, setContacts] = useState(prodContacts.splice(0,5))

  // Create function to generate random client

  const handleRandom = () => {
    
   let randomContact = prodContacts[Math.floor(Math.random() * prodContacts.length)]

    setContacts([randomContact, ...contacts])
  }

  // Create function to sort alphabetically

  const sortAlpha = () => {

    let alpha = [...contacts].sort((firstContact, secondContact) => (firstContact.name > secondContact.name ? 1 : -1));

    setContacts(alpha);

  }

  // Create function to sort by popularity

  const sortPop = () => {

    let popularity = [...contacts].sort((firstContact, secondContact) =>  secondContact.popularity - firstContact.popularity);

    setContacts(popularity)

  }

  // Create function to delete a celebrity

  const deleteCeleb = (celebId) => {

    const filteredCelebs = contacts.filter((contact) => {

      return contact.id != celebId;

    })

    setContacts(filteredCelebs)

  }

  // Create Table

  return ( <div className="App">

    <h1> IronContacts </h1>
    <div className="btn-row">
      <button className="btn" onClick={handleRandom}> Random Celebrity </button>
      <button className="btn" onClick={sortAlpha}> Sort A-Z </button>
      <button className="btn" onClick={sortPop}> Sort By Popularity </button>
    </div>

      <table>
        <tr className="table-header">
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won Oscar</th>
          <th>Won Emmy</th>
          <th>Actions</th>
        </tr>

      {contacts.map((contact) => {

        return (
          
        <tr key={contact.id} className="row">
          <td className="detail"><img src={contact.pictureUrl} /></td>
          <td className="detail">{contact.name}</td>
          <td className="detail">{contact.popularity.toFixed(2)}</td>
          {contact.wonOscar ? <td className="detail">🏆</td>: <td className="detail"></td>}
          {contact.wonEmmy ? <td className="detail">🏆</td> : <td className="detail"></td>}
          <td className="detail"><button className="delete-btn" onClick={() => deleteCeleb(contact.id)}>Delete</button></td>
        </tr>
 
        )

      })}

      </table>

  </div>
  );
}

export default App;
