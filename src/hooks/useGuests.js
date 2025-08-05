import { useState, useEffect } from 'react'

export default function useGuests() {
  const [guestList, setGuestList] = useState([])

  useEffect(() => {
    // 👉 HARD-CODED TEST DATA
    setGuestList([
      { id: 1, name: 'Test Guest', email: 'test@guest.com', phone: '555-1234' },
      { id: 2, name: 'Demo Guest', email: 'demo@guest.com', phone: '555-5678' }
    ])
  }, [])

  return guestList
}
