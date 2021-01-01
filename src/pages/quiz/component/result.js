import React from 'react'

import store from './../../../store'

import correct_image from './../images/correct.png'
import wrong_image from './../images/wrong.png'

import './../styles/result.style.css'

export default function Result() {
    const [state] = store()
    const { quiz } = state
    const { questions, answers } = quiz

    const renderResultsData = () => {
        return answers.map(answer => {
            const question = questions.find(
                question => question.id === answer.questionId
            )

            return (
                <div key={question.id} className="result__item">
                    {question.question} {renderResultMark(question, answer)}
                </div>
            )
        })
    }

    const renderResultMark = (question, answer) => {
        if (question.correct_answer === answer.answer) {
            return <img className="correct" src={correct_image} alt="correct" />
        }
        return <img className="failed" src={wrong_image} alt="wrong" />
    }

    return (
        <div className="result" >
            {renderResultsData()}
        </div>
    )
}
