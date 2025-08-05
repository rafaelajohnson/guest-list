import { useState, useEffect } from 'react'

export default function useGuests() {
  const [guests, setGuests] = useState([])
  useEffect(() => {
     fetch('https://fsa-crud-2aa9294fe819.herokuapp.com/api/guests')
      .then((res) => res.json())
      .then((data) => setGuests(data))
      .catch((err) => console.error('Error loading guests', err))
  }, [])
  return guests
}
