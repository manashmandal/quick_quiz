import { SET_ANSWERS, SET_CURRENT_QUESTION, SET_CURRENT_ANSWER, SET_ERROR, SET_SHOW_RESULTS, RESET_QUIZ, QUESTION_DELETE, QUESTION_ADD, QUESTION_UPDATE } from './types.js'
import { getQuestions, deleteQuestion, addQuestion, updateQuestion } from './../../dumy_db_manage/dumy_queries/questions.queries'

const initialState = {
    questions: getQuestions(),
    current_question: 0,
    current_answer: '',
    answers: [],
    show_results: false,
    error: '',
}

function quizReducer(state = initialState, action) {
    switch (action.type) {
        //User action
        case SET_CURRENT_ANSWER:
            return {
                ...state,
                current_answer: action.current_answer,
            }
        case SET_CURRENT_QUESTION:
            return {
                ...state,
                current_question: action.current_question,
            }
        case SET_ERROR:
            return {
                ...state,
                error: action.error,
            }
        case SET_SHOW_RESULTS:
            return {
                ...state,
                show_results: action.show_results,
            }
        case SET_ANSWERS:
            return {
                ...state,
                answers: action.answers,
            }
        case RESET_QUIZ:
            return {
                ...state,
                answers: [],
                current_question: 0,
                current_answer: '',
                show_results: false,
                error: '',
            }

        //Admin action
        case QUESTION_DELETE:
            return {
                ...state,
                questions: deleteQuestion(state.questions, action.id),
            }

        case QUESTION_ADD:
            return {
                ...state,
                questions: addQuestion(state.questions, action.new_question),
            }
        case QUESTION_UPDATE:
            return {
                ...state,
                questions: updateQuestion(state.questions, action.updated_question),
            }
        default:
            return state
    }
}

export default quizReducer