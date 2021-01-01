import React from 'react'

import store from '../../../store'

import './../styles/progress.style.css'

function Progress() {
    const [state] = store()
    const { quiz } = state
    const { current_question, questions } = quiz

    return (
        <div className="progress">
            Question {current_question + 1} of {questions.length}
        </div>
    )
}

export default Progress