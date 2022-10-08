import React, { useEffect, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

function calcFatorial(n) {
    if (n < 0) return -1
    else if (+n === 0) return 1
    return calcFatorial(n - 1) * n
}


const UseEffect = (props) => {
    const [number, setNumber] = useState(1)
    const [fatorial, setFatorial] = useState(1)
    
    const [number2, setNumber2] = useState(1)
    const [parOrImpar, setParOrImpar] = useState(1)

    useEffect(function() {
        setFatorial(calcFatorial(number))
    }, [number])

    useEffect(function() {
        setParOrImpar(number2 % 2 === 0 ? 0 : -1 )
    }, [number2])


    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />
            <SectionTitle title="Exercício #01"></SectionTitle>
            <div className="center">
                <div>
                    <span className="text">Fatorial: </span>
                    <span className="text red">{fatorial === -1 ? "Não existe" : fatorial}</span>
                </div>
                <input type="number" className="input"
                    value={number}
                    onChange={e => setNumber(e.target.value)}
                />
            </div>
            <SectionTitle title="Exercício #02"></SectionTitle>
            <div className="center">
                <div>
                    <span className="text">Status: </span>
                    <span className="text red">{parOrImpar === 0 ? "Par" : "Impar"}</span>
                </div>
                <input type="number" className="input"
                    value={number2}
                    onChange={e => setNumber2(e.target.value)}
                />
            </div>
        </div>
    )
}

export default UseEffect
