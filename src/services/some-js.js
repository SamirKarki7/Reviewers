const todo = {
    id: 23,
    active: false,
    title: 'Eat',
    user: {
        id: 23,
        name: 'Samir'
    }


}
const {user} = todo 
const { name: userName} = user
const todo2 = {
    ...todo,
    user: {
        ...todo.user
    }
}


// Error Hanling