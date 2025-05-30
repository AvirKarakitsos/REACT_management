import { useState, useEffect } from 'react'

export function useFetch(url) {
    
    const [table, setTable] = useState({})
    const [load, setLoad] = useState(true)
    
    useEffect(() => {
        const controller = new AbortController()
        
        if (!url) return

        async function fetchData() {
            try {
                const response = await fetch(url, {signal:controller.signal})
                const result = await response.json()
                
                setTable(result)
                setLoad(false)

            } catch(err) {
                if (err.name === 'AbortError') {
                    console.log('AbortError: Fetch request aborted');
                }
            }
        }
        setLoad(true)
        fetchData()
        
    }, [url])

    return { load, table }
}