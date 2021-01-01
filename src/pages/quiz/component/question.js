import React from 'react'

import store from '../../../store'

import question_mark_image from './../images/question-mark.png'
import './../styles/question.style.css'

function Question() {
    const [state] = store()
    const { quiz } = state
    const { current_question, questions } = quiz

    const question = questions[current_question]

    return (
        <div className="question">
            <img className="question_image" src={question_mark_image} alt="question" /> <span>{question.question}</span>
        </div>
    )
}

export default Question