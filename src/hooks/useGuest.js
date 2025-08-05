import { useState, useEffect } from 'react'

export default function useGuest(guestId) {
  const [guestDetails, setGuestDetails] = useState(null)

  useEffect(() => {
    if (!guestId) return

    fetch(`https://fsa-crud-2aa9294fe819.herokuapp.com/api/2aa9294fe819/guests/${guestId}`)
      .then((res) => res.json())
      .then((payload) => {
        console.log('Fetched guest payload:', payload)
        const data = payload.data ?? payload
        setGuestDetails(data)
      })
      .catch((err) => console.error('Failed to load guest details', err))
  }, [guestId])

  return guestDetails
}
