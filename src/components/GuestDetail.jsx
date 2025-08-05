import React from 'react'
import useGuest from '../hooks/useGuest.js'

export default function GuestDetail({ guestId, onBack }) {
  const guestDetails = useGuest(guestId)

  if (!guestDetails) {
    return <p>Loading guest details…</p>
  }

  return (
    <div className="detail-container">
      <h1>{guestDetails.name}</h1>
      <p><strong>Email:</strong> {guestDetails.email}</p>
      <p><strong>Phone:</strong> {guestDetails.phone}</p>
      <p><strong>Job:</strong> {guestDetails.job}</p>
      <p><strong>Bio:</strong> {guestDetails.bio}</p>
      <button onClick={onBack}>Back to list</button>
    </div>
  )
}
