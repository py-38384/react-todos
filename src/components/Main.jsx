import Input from './Input'
import Button from './Button'
import Todo from './Todo';
import { createContext, useEffect, useState } from 'react';

export const todoContext = createContext() 
const Main = () => {
    const [todos, setTodos] = useState(() => {
        const stringifyTodo = localStorage.getItem('todos')
        if(stringifyTodo){
            return JSON.parse(stringifyTodo)
        }
        return []
    })
    const [newTodo, setNewTodo] = useState('')
    const adTodo = () => {
        const newTodoObj = {
            id: todos? todos.length + 1: 1,
            text: newTodo
        }
        setTodos(todos?[...todos, newTodoObj]: [newTodoObj])
        setNewTodo('')
    }
    

    useEffect(() => {
        localStorage.setItem('todos',JSON.stringify(todos))
    }, [todos])
    return (
        <todoContext.Provider value={{todos, setTodos}}>
        <div className='min-h-[100vh] flex justify-center items-center bg-slate-200'>
            <div>
                <div>
                    <Input newTodo={newTodo} onInput={(e) => setNewTodo(e.target.value)}/>
                    <Button onClick={adTodo}/>
                </div>
                <div className='mt-2 flex flex-col gap-y-2'>
                    {todos && todos.map((todo, index) => (
                        <Todo key={todo.id} slNumber={index+1} todo={todo}/>
                    ))}
                </div>
            </div>
        </div>
        </todoContext.Provider>
    )
}

export default Main