import React from 'react'
import useGuests from '../hooks/useGuests.js'

export default function GuestList({ onSelectGuest }) {
  const guestList = useGuests()

  if (guestList.length === 0) {
    return <p>Loading guest list…</p>
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
          {guestList.map((guest) => (
            <tr key={guest.id} onClick={() => onSelectGuest(guest.id)}>
              <td>{guest.name}</td>
              <td>{guest.email}</td>
              <td>{guest.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>Select a guest to see more details.</p>
    </div>
  )
}
