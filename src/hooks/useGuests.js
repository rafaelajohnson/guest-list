import { useState, useEffect } from 'react'

export default function useGuests() {
  const [guestList, setGuestList] = useState([])

  useEffect(() => {
    fetch('https://fsa-crud-2aa9294fe819.herokuapp.com/api/guests')
      .then((res) => res.json())
      .then((payload) => {
        console.log('Fetched guests payload:', payload)
        const data = payload.data ?? payload
        setGuestList(data)
      })
      .catch((err) => console.error('Failed to load guest list', err))
  }, [])

  return guestList
}
