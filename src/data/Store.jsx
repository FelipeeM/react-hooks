import React, { useState } from "react";

const initalState = {
    number: 1234,
    text: 'Context API + Hooks'
}

export const AppContext = React.createContext(initalState)

const Store = props => {
    const [state, setState] = useState(initalState)

    function updateState(key,value) {
        setState({
            ...state,
            [key]: value
        })
    }

    return (
        <AppContext.Provider value={{
            number: state.number,
            text: state.text,
            setNumber: n => updateState('number', n),
            setText: t => updateState('text', t)
        }}>
            <div>{props.children}</div>
        </AppContext.Provider>
    )
}

export default Store