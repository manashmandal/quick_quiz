//This file is too ugle. all most every thing is hard coded :(
import React, { useState } from 'react'
import Select from 'react-select'

import { QUESTION_ADD } from './../../../reducer/quiz.reducer/types.js'

import store from './../../../store'

import Button from './../../../core/button'
import Input from './../../../core/input'

import options from './../../../constant/options'

function NewQuestionForm() {
    const [state, dispatch] = store()

    const [question, setQuestion] = useState(null)
    const [option_a, setOption_A] = useState(null)
    const [option_b, setOption_B] = useState(null)
    const [option_c, setOption_C] = useState(null)
    const [option_d, setOption_D] = useState(null)
    const [correct_ans, setCorrectAnswer] = useState(null)


    const handleNewQuestion = (new_question) => setQuestion(new_question)
    const handleOptionA = (option_a) => setOption_A(option_a)
    const handleOptionB = (option_b) => setOption_B(option_b)
    const handleOptionC = (option_c) => setOption_C(option_c)
    const handleOptionD = (option_d) => setOption_D(option_d)
    const handleCorrectAnswer = (correct_ans) => setCorrectAnswer(correct_ans)

    const new_question_id = () => state.quiz.questions.length > 0 ? state.quiz.questions[state.quiz.questions.length - 1].id + 1 : 1

    const addNewQuestion = () => {
        const new_question = {
            "id": new_question_id(),
            "question": question,
            "option_a": option_a,
            "option_b": option_b,
            "option_c": option_c,
            "option_d": option_d,
            "correct_answer": correct_ans.value
        }
        dispatch({
            type: QUESTION_ADD,
            new_question: new_question,
        })
    }

    return (
        <div className="wrapper" style={{ "padding": "24px 24px 200px 24px" }}>
            <Input
                classNameMod="question"
                type="text"
                handleChange={handleNewQuestion}
                name="new-question"
                placeholder="New question"
            />

            <div className="wrapper">
                {question && <Input
                    classNameMod="option"
                    type="text"
                    handleChange={handleOptionA}
                    name={`option-a-${new_question_id()}`}
                    placeholder="Option A"
                />}


                {question && option_a && <Input
                    classNameMod="option"
                    type="text"
                    handleChange={handleOptionB}
                    name={`option-b-${new_question_id()}`}
                    placeholder="Option B"
                />}

                {question && option_a && option_b && <Input
                    classNameMod="option"
                    type="text"
                    handleChange={handleOptionC}
                    name={`option-c-${new_question_id()}`}
                    placeholder="Option c"
                />}

                {question && option_a && option_b && option_c && <Input
                    classNameMod="option"
                    type="text"
                    handleChange={handleOptionD}
                    name={`option-d-${new_question_id()}`}
                    placeholder="Option d"
                />}

            </div>

            {question && option_a && option_b && option_c && option_d &&
                <div className="wrapper" style={{ "width": "215px" }}>
                    <Select
                        value={correct_ans}
                        onChange={handleCorrectAnswer}
                        options={options}
                        placeholder="Correct answer"
                    />
                </div>
            }

            {question && option_a && option_b && option_c && option_d && correct_ans &&
                <Button
                    classNameMod="open-modal"
                    handleClick={addNewQuestion}
                >
                    <span>Submit</span>
                </Button>
            }
        </div>

    )

}

export default NewQuestionForm;