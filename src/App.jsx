import React, { useState } from 'react'
import GuestList from './components/GuestList.jsx'
import GuestDetail from './components/GuestDetail.jsx'

export default function App() {
  const [selectedId, setSelectedId] = useState(null)

  return (
    <div className="container">
      {selectedId === null ? (
        <GuestList onSelect={setSelectedId} />
      ) : (
        <GuestDetail id={selectedId} onBack={() => setSelectedId(null)} />
      )}
    </div>
  )
}
