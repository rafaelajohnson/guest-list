import React from 'react'
import useGuest from './hooks/useGuest.js'

export default function GuestDetail({ id, onBack }) {

  const guest = useGuest(id)
  
  if (!guest) {
    return <p>Loading details</p>
  }

  return (
    <div className="detail-container">
      <h1>Guest Detail</h1>
      <p><strong>Name:</strong> {guest.name}</p>
      <p><strong>Email:</strong> {guest.email}</p>
      <p><strong>Phone:</strong> {guest.phone}</p>
      <p><strong>Address:</strong> {guest.address}</p>
      <button onClick={onBack}>Back to list</button>
    </div>
  )
}