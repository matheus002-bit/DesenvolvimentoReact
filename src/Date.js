import {useState, useEffect} from 'react'
import "./Letreiro.css"

export function DateComponent() {

    const [data, setData] = useState('')

    useEffect(() => {
        setInterval(() => {
            const today = new Date().toLocaleTimeString();
            setData(today)

        }, 10)
    }, [])

    return (
        <h1 className="minhaclasse">{data}</h1>
    )
}