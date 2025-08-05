import { useState, useEffect} from 'react'

export defaul function useGuest(id) {
    const [guest, setGuest] = useState(null)
    useEffect(() => {
        if (!id) return
    
        fetch(`https://fsa-crud-2aa9294fe819.herokuapp.com/api/guests/${id}`)
            .then((res) => res.json())
            .then((data) => setGuest(data))
            .catch((err) => console.error('Error loading guest', err))
    }, [id])

    return guest
}