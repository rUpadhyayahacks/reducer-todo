import React, { useState, useReducer } from 'react'


import { simpleReducer, initialState } from '../reducers/simpleReducer';

const TodoForm = () => {
    const [state, dispatch] = useReducer(simpleReducer, initialState)
    // const {item, completed, id} = state

    const [newTodoText, setNewTodoText] = useState('')


const handleChanges = e =>{
    setNewTodoText(e.target.value)
}

const handleSubmit = e => {
    e.preventDefault();
    dispatch({ type: 'ADD_TODO', payload: { item:newTodoText, completed: false, id: Date.now() }})

}
console.log(state)


return (
    
    <div className='text-box'>
        <form className='list'
        onSubmit={handleSubmit}
        >
        <input className='add'
        type='text'
        name='newTodoText'
        value={newTodoText}
        onChange={handleChanges}
        // onClick={() => dispatch({type: 'ADD_TODO'})}
        placeholder="New Todo!"
        />
        <button >
            Add New
        </button>
       
        </form>
        <button onClick={() => dispatch({ type: 'DELETE_ITEM'})}>
            Remove Completed
        </button>
        {state.todos.map((item) => {
            return (
            <div 
            className={`${item.completed ? 'item-completed': ''}`}
             onClick={() => dispatch({ type: 'TOGGLE_ITEM', payload: item.id})}
            key={item.id}>

                <h1>{item.item}</h1>

                </div>
            )}

            
)}


</div>
)



}

export default TodoForm