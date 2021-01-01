import { combineReducers } from 'redux'
import quizReducer from './quiz.reducer'
import authReducer from './auth.reducer'

export default combineReducers({
    quiz: quizReducer,
    auth: authReducer
});