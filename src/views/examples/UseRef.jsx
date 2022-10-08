import React, { useEffect, useRef, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

function merge(s1,s2,firstString){
    let merge = ""
    let n = s1.length+s2.length  

    for(let i = 0;i < n;i++){
        if(firstString === "s1"){
            if(s1.length > i){
                merge += s1[i]
            }if(s2.length > i){
                merge += s2[i]
            }
        }else{
            if(s2.length > i){
                merge += s2[i]
            }if(s1.length > i){
                merge += s1[i]
            }
        }
    }
    return merge == undefined ? merge : merge
}


const UseRef = (props) => {
    const [value1,setValue1] = useState('')
    const [value2,setValue2] = useState('')
    const [firstString,setFirstString] = useState('')
    const count = useRef(0)
    const myInput1 = useRef(null)
    const myInput2 = useRef(null)

    useEffect(function(){
        count.current ++
        myInput2.current.focus()
    },[value1])

    useEffect(function(){
        count.current ++    
        myInput1.current.focus()
    },[value2])

    useEffect(function(){
        if(value1.length >= value2.length && value1.length+value2.length === 1) {
            console.log('>>>>>> S1 <<<<<<<')
            setFirstString("s1")
        }else if(value1.length+value2.length === 1){
            console.log('>>>>>> S2 <<<<<<<')
            setFirstString("s2")
        }
    },[value1,value2])
    
    return (
        <div className="UseRef">
            <PageTitle
                title="Hook UseRef"
                subtitle="Retorna um objeto mutável com a propriedade .current!"
            />
            <SectionTitle title="Exercício #01"></SectionTitle>
            <div className="center">
                <div>
                    <span className="text">Valor: </span>
                    <span className="text">{merge(value1,value2,firstString)} [</span>
                    <span className="text red">{count.current}</span>
                    <span className="text">]</span>
                    
                </div>
                <input type="text" className="input" 
                    ref={myInput1}
                    value={value1}
                    onChange={e => setValue1(e.target.value)}
                />
            </div>
            <SectionTitle title="Exercício #01"></SectionTitle>
            <div className="center">
                <input type="text" className="input"
                    ref={myInput2} 
                    value={value2}
                    onChange={e => setValue2(e.target.value)}
                />
            </div>
        </div>
    )
}

export default UseRef
