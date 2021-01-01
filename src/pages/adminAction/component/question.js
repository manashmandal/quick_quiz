import React, { useState, useEffect } from 'react'
import Select from 'react-select'

import { QUESTION_DELETE, SET_ERROR, QUESTION_UPDATE } from '../../../reducer/quiz.reducer/types.js'

import store from './../../../store'

import Input from './../../../core/input'
import Button from './../../../core/button'

import options from './../../../constant/options'

function Question(props) {
    const [state, dispatch] = store()
    const { question } = props

    const [question_form_data, setQuestionFormData] = useState(question)
    useEffect(() => {
        setQuestionFormData(question);
    }, [question])

    const handleQuestion = (updated_question) => {
        let _question = JSON.parse(JSON.stringify(question_form_data))
        _question.question = updated_question

        setQuestionFormData(_question)
    }

    const handleOptionA = (updated_option_a) => {
        let _question = JSON.parse(JSON.stringify(question_form_data))
        _question.option_a = updated_option_a

        setQuestionFormData(_question)
    }

    const handleOptionB = (updated_option_b) => {
        let _question = JSON.parse(JSON.stringify(question_form_data))
        _question.option_b = updated_option_b

        setQuestionFormData(_question)
    }

    const handleOptionC = (updated_option_c) => {
        let _question = JSON.parse(JSON.stringify(question_form_data))
        _question.option_c = updated_option_c

        setQuestionFormData(_question)
    }

    const handleOptionD = (updated_option_d) => {
        let _question = JSON.parse(JSON.stringify(question_form_data))
        _question.option_d = updated_option_d

        setQuestionFormData(_question)
    }

    const handleCorrectAnswer = (correct_ans) => {
        let _question = JSON.parse(JSON.stringify(question_form_data))
        _question.correct_answer = correct_ans.value

        setQuestionFormData(_question)
    }

    const updateQuestion = () => {
        dispatch({
            type: QUESTION_UPDATE,
            id: question_form_data,
        })
        dispatch({ type: SET_ERROR, error: '' })
    }

    const deleteQuestion = () => {
        dispatch({
            type: QUESTION_DELETE,
            id: question_form_data.id,
        })
        dispatch({ type: SET_ERROR, error: '' })
    }

    const getQuestionForm = (question) => {
        return (<div className="wrapper" style={{ "padding": "24px 0px" }}>
            <Input
                type="text"
                handleChange={handleQuestion}
                classNameMod='question'
                name={`question--${question.question}`}
                placeholder='Question'
                value={question.question}
            />
            <div>

                <Input
                    type="text"
                    handleChange={handleOptionA}
                    classNameMod='option'
                    name={`question--${question.question}_${question.option_a}`}
                    placeholder='Option A'
                    value={question.option_a}
                />


                <Input
                    type="text"
                    handleChange={handleOptionB}
                    classNameMod='option'
                    name={`question--${question.question}_${question.option_b}`}
                    placeholder='Option B'
                    value={question.option_b}
                />

                <Input
                    type="text"
                    handleChange={handleOptionC}
                    classNameMod='option'
                    name={`question--${question.question}_${question.option_c}`}
                    placeholder='Option C'
                    value={question.option_c}
                />

                <Input
                    type="text"
                    handleChange={handleOptionD}
                    classNameMod='option'
                    name={`question--${question.question}_${question.option_d}`}
                    placeholder='Option D'
                    value={question.option_d}
                />
            </div>
            <div style={{ "width": "215px" }}>
                <Select
                    defaultValue={{ "value": question.correct_answer, "label": question.correct_answer }}
                    value={{ "value": question.correct_answer, "label": question.correct_answer }}
                    onChange={handleCorrectAnswer}
                    options={options}
                    placeholder="Correct answer"
                />
            </div>
        </div>
        )
    }

    return (
        <div className="question-action">
            <div className="question-details">
                {getQuestionForm(question_form_data)}
            </div>
            <div className="action-group">
                <Button
                    classNameMod="update-question"
                    handleClick={updateQuestion}
                >
                    <span>Update</span>
                </Button>

                <Button
                    classNameMod="delete-question"
                    handleClick={deleteQuestion}
                >
                    <span>Delete</span>
                </Button>
            </div>
        </div>
    )
}

export default Question