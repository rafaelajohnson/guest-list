import React, { useState } from 'react'
import GuestList from './components/GuestList.jsx'
import GuestDetail from './components/GuestDetail.jsx'

export default function App() {
  const [selectedGuestId, setSelectedGuestId] = useState(null)

  const handleGuestSelect = (id) => {
    setSelectedGuestId(id)
  }

  const handleBackToList = () => {
    setSelectedGuestId(null)
  }

  return (
    <div className="container">
      {selectedGuestId === null ? (
        <GuestList onSelectGuest={handleGuestSelect} />
      ) : (
        <GuestDetail guestId={selectedGuestId} onBack={handleBackToList} />
      )}
    </div>
  )
}

