import React from 'react'
import useGuest from '.../hooks/useGuests.js'

export default function GuestList({ onSelect }) {

  const guests = useGuest()
  
  if (guests.length === 0) {
    return <p>Loading list</p>
  }

  return (
    <div className="list-container">
      <h1>Guest List</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {guests.map((g) => (
            <tr key={g.id} onClick={() => onSelect(g.id)}>
              <td>{g.name}</td>
              <td>{g.email}</td>
              <td>{g.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>Select a guest to see more details.</p>
    </div>
  )
}
