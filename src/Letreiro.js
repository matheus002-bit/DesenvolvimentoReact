import React, { useEffect, useState } from "react";
import "./Letreiro.css"

export function Letreiro() {

    const [text, setText] = useState('');

    useEffect(() => {
        const escreveTexto = () => {
            let i = 0;
            let x = 0;
            let message = "Venha estudar na FATEC!!!"

            const interval = setInterval(() => {
                let text = '';
                for (x = 0; x < i; x++) {
                    text += message[x]
                }
                setText(text)
                i++;
                if (i > message.length) {
                    clearInterval(interval)
                }

            }, 100)
        }
    
        escreveTexto();

    }, [])

    return (
        <h1 className="minhaclasse">{text}</h1>

    )
}