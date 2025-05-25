import Input from './Input'
import Button from './Button'
import Todo from './Todo';
import { createContext, useEffect, useState} from 'react';
import { type todoContextType, type todoType } from '../Types';
import { defaultTodoContextValue } from '../DefaultValues'

export const todoContext = createContext<todoContextType>(defaultTodoContextValue) 

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
        const date = new Date();
        const formattedDate = date.toLocaleDateString('en-GB');
        const fetchId = localStorage.getItem('todoId')
        let id = fetchId?parseInt(fetchId):1
        const newTodoObj = {
            id: id,
            date: formattedDate,
            text: newTodo
        }
        id += 1
        localStorage.setItem('todoId', String(id))
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
                    <Input newTodo={newTodo} onChange={(e) => setNewTodo(e.target.value)}/>
                    <Button onClick={adTodo}/>
                </div>
                <div className='mt-2 flex flex-col gap-y-2'>
                    {todos && todos.map((todo:todoType, index:number) => (
                        <Todo key={todo.id} slNumber={index+1} todo={todo}/>
                    ))}
                </div>
            </div>
        </div>
        </todoContext.Provider>
    )
}

export default Main