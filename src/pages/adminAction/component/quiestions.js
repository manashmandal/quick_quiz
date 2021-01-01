import React from 'react'

import store from './../../../store'

import Question from './question'

import './../styles/questions.style.css'

function Questions() {
    const [state] = store()
    const { quiz } = state
    const { questions } = quiz

    const getQustions = () => questions.map((question, index) =>
        <Question
            question={question}
            key={`question_${index}`}
        />
    )

    return (
        <div className="questions">
            {getQustions()}
        </div>
    )
}

export default Questions