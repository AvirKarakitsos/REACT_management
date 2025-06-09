import { useState, useEffect, useContext } from 'react'
import { grid } from './common.jsx'
import { RefreshContext } from './context/RefreshContext.js'

export function useFetch(url) {
    
    const [table, setTable] = useState({})
    const [load, setLoad] = useState(true)
    const {refresh} = useContext(RefreshContext)
    
    useEffect(() => {
        const controller = new AbortController()
        
        if (!url) return
        
        async function fetchData() {
            let newUrl = new URL(url)
            try {
                const response = await fetch(url, {signal:controller.signal})
                const result = await response.json()

                if(newUrl.pathname === `/api/articles/all/recent` || newUrl.pathname === `/api/articles/stock` || newUrl.pathname === `/api/articles/sold` || newUrl.pathname === `/api/articles/online`) {
                    let finalResult=grid(result)
                    setTable(finalResult)

                } else {
                    setTable(result)
                }
                
                setLoad(false)

            } catch(err) {
                if (err.name === 'AbortError') {
                    console.log('AbortError: Fetch request aborted');
                }
            }
        }
        setLoad(true)
        fetchData()
        
    }, [url,refresh])

    return { load, table }
}