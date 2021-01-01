import React from 'react'

import { SET_CURRENT_ANSWER, SET_ERROR } from '../../../reducer/quiz.reducer/types.js'

import './../styles/option.style.css'

function Option(props) {
    let classes = ['option']
    if (props.selected) { classes.push('option--selected') }

    const handleClick = selected_letter_index => {
        props.dispatch({
            type: SET_CURRENT_ANSWER,
            current_answer: selected_letter_index,
        })
        props.dispatch({ type: SET_ERROR, error: '' })
    }

    return (
        <div
            className={classes.join(' ')}
            onClick={() => handleClick(props.letter)}
        >
            <div className="option__index">{props.letter}.</div>
            <div className="option__text">{props.option}</div>
        </div>
    )
}

export default Option