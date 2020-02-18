export const initialState = {
    todos: [{
    item: 'Learn about reducers',
  completed: false,
  id: 3892987589

    }]
}

export const simpleReducer = (state, action) => {
    console.log(state, action)
    switch (action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                todos: [ ...state.todos, action.payload]
            }

            case "TOGGLE_ITEM":
                return {
                    ...state,
                    todos: state.todos.map((todo) => {
                        if (todo.id === action.payload) {
                        return {...todo, completed: !todo.completed} 
                        }
                        else {return todo}
                    })
                }
                case 'DELETE_ITEM':
                    return {
                        ...state,
                        todos: state.todos.filter((todo) => 
                            !todo.completed
                        )
                    }
        default:
            return state;
    }

}



