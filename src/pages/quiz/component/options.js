import React from 'react'

import store from '../../../store'

import Option from './option'

const option_index = ['a', 'b', 'c', 'd']

function Options() {
    const [state, dispatch] = store()
    const { quiz } = state
    const { current_answer, current_question, questions } = quiz
    const question = questions[current_question]

    return (option_index.map((letter, index) =>
        <Option
            letter={letter}
            option={question[`option_${letter}`]}
            dispatch={dispatch}
            selected={current_answer === letter}
            key={`option_${letter}_${index}`}
        />
    ))
}

export default Options