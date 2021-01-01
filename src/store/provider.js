import React, { useReducer } from 'react'
import Context from './context'

export default function Provider(props) {
    const initialState = props.rootReducer(props.initialValue, { type: '__INIT__' })
    const [state, dispatch] = useReducer(props.rootReducer, initialState)

    return (
        <Context.Provider value={[state, dispatch]}>
            {props.children}
        </Context.Provider>
    )
}