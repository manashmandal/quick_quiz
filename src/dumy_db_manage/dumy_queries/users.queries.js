import users from './../dumy_data/users.data'

const getUser = (current_user) => {
    let auth_user = users.find(user => user.email === current_user.email && user.password === current_user.password)
    if (auth_user) return auth_user
    return null
}

export { getUser }