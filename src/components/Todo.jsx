import { useContext, useEffect, useRef, useState } from "react";
import { FaDeleteLeft } from "react-icons/fa6";
import { todoContext } from "./Main";

const Todo = ({ todo, slNumber }) => {
    const textareaRef = useRef()
    const {todos, setTodos} = useContext(todoContext)

    const [value, setValue] = useState(todo.text)
    const resizeTextarea = () => {
        const textarea = textareaRef.current
        textarea.style.height = `${textarea.scrollHeight}px`
    }
    const blurTextarea = () => {
        const textarea = textareaRef.current
        textarea.style.height = '40px';
    }
    const focusTextarea = () => {
        const textarea = textareaRef.current
        textarea.style.display = 'flex'
        resizeTextarea()
    }
    const updateTodo = (e) => {
        setValue(e.target.value)
    }
    const deleteTodo = () => {
        setTodos(prev => prev.filter(item => item.id !== todo.id))
    }
    useEffect(() => {
        console.log(value)
        setTodos(todos.map(item => item.id === todo.id? {...item, text:value} : item))
    }, [value])
    useEffect(() => {
        const textarea = textareaRef.current
        textarea.addEventListener('input',resizeTextarea)
        textarea.addEventListener('blur',blurTextarea)
        textarea.addEventListener('focus',focusTextarea)
        return () => {
            textarea.removeEventListener('input',resizeTextarea)
            textarea.addEventListener('blur',blurTextarea)
            textarea.addEventListener('focus',focusTextarea)
        }
    }, [])

    return (
        <div className='flex justify-between gap-x-2'>
            <span className='flex items-center justify-center bg-slate-100 h-[40px] w-[8%]'>{slNumber}</span>
            <textarea className='w-[84%] h-[40px] items-center justify-center bg-slate-100 cursor-pointer outline-0 px-2 min-h-[40px] resize-none overflow-hidden pt-[5px] leading-[30px] focus:border border-dotted' onChange={updateTodo} ref={textareaRef} value={value}></textarea>
            <span className='flex items-center justify-center bg-slate-100 h-[40px] w-[8%] text-[20px] text-red-500 transition hover:text-white hover:bg-red-500 cursor-pointer' onClick={deleteTodo}><FaDeleteLeft /></span>
        </div>
    )
}

export default Todo