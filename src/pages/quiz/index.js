import React from 'react'

import store from './../../store'
import { SET_ANSWERS, SET_CURRENT_QUESTION, SET_CURRENT_ANSWER, SET_ERROR, SET_SHOW_RESULTS, RESET_QUIZ } from './../../reducer/quiz.reducer/types.js'

import Button from './../../core/button'
import Card from './../../core/card'
import Layout from './../../core/layout'
import Msg from './../../core/msg'

import Question from './component/question'
import Options from './component/options'
import Progress from './component/progress'
import Result from './component/result'

import result_image from './images/result.png'
import result_banner_image from './images/result_banner.svg'
import question_image from './images/question.svg'

import './quiz.style.css'

export default function Quiz() {
    const [state, dispatch] = store()
    const { quiz } = state
    const { current_question, questions, current_answer, answers, show_results, error } = quiz
    const question = questions[current_question]

    //submit the answer of current question and get the next qustion  
    const next = () => {
        const answer = { questionId: question.id, answer: current_answer }

        if (!current_answer) {
            dispatch({ type: SET_ERROR, error: 'Please select an option' })
            return
        }
        answers.push(answer)

        dispatch({ type: SET_ANSWERS, answers })
        dispatch({ type: SET_CURRENT_ANSWER, current_answer: '' })

        if (current_question + 1 < questions.length) {
            dispatch({
                type: SET_CURRENT_QUESTION,
                current_question: current_question + 1,
            })
            return
        }

        dispatch({ type: SET_SHOW_RESULTS, show_results: true })
    }

    //answered all the question and restart the quiz from beginning
    const restart = () => {
        dispatch({ type: RESET_QUIZ })
    }

    // create question card
    const getQuestionCardHeader = () => <Question />
    const getQuestionCardBody = () => <>
        <Options />

        {error && <Msg classNameMod="warn">
            <span>
                {error}
            </span>
        </Msg>}
    </>
    const getQuestionCardFooter = () => <>
        <Button
            handleClick={next}
            classNameMod="submit-answer"
        >
            <span>Confirm and continue</span>
        </Button>
        <Progress />
    </>

    //create result card 
    const getResultCardHeader = () => <>
        <img className="result_image" src={result_image} alt="result" /> <span>Result</span>
    </>
    const getResultCardBody = () => <Result />
    const getResultCardFooter = () => <Button
        handleClick={restart}
        classNameMod="reset"
    >
        <span>Restart</span>
    </Button>

    return (
        <Layout>
            <div className={`container container--quiz`}>
                <div id="bg"></div>

                {show_results ?
                    <Card
                        header={getResultCardHeader}
                        body={getResultCardBody}
                        footer={getResultCardFooter}
                        classNameMod="result"
                    />
                    : <Card
                        header={getQuestionCardHeader}
                        body={getQuestionCardBody}
                        footer={getQuestionCardFooter}
                        classNameMod="question"
                    />
                }

                <img
                    className="quiz-image"
                    src={show_results ? result_banner_image : question_image}
                    alt="quiz"
                />
            </div>
        </Layout>
    )
}