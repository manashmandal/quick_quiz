import questions from './../dumy_data/questions.data'

const getQuestions = () => {
    return questions
}

const deleteQuestion = (current_questions, id) => {
    let filtered_questions = current_questions.filter(current_question => current_question.id !== id)

    return filtered_questions
}

const addQuestion = (current_questions, new_question) => {
    current_questions.push(new_question)

    return current_questions
}

const updateQuestion = (current_questions, updated_question) => {
    let index = current_questions.findIndex(question => question.id === updated_question)
    current_questions[index] = updated_question

    return current_questions
}

export { getQuestions, deleteQuestion, addQuestion, updateQuestion }