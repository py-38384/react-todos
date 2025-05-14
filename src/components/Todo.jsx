import { useEffect, useRef, useState } from "react";
import { FaDeleteLeft } from "react-icons/fa6";
import Input from "./Input";

const Todo = () => {
    const textareaRef = useRef()
    const inputRef = useRef()
    const [value, setValue] = useState('Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam maxime, tempore reprehenderit libero possimus quasi ducimus quia harum et minima ea sequi, repudiandae, eos laboriosam accusamus. Aperiam doloribus quasi, accusamus fugiat, labore tempora culpa laborum, unde earum esse asperiores consequatur?')
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
            <span className='flex items-center justify-center bg-slate-100 h-[40px] w-[8%]'>1</span>
            <textarea className='w-[84%] h-[40px] items-center justify-center bg-slate-100 cursor-pointer outline-0 px-2 min-h-[40px] resize-none overflow-hidden pt-[5px] leading-[30px] focus:border border-dotted' onChange={e => setValue(e.target.value)} ref={textareaRef} value={value}></textarea>
            <span className='flex items-center justify-center bg-slate-100 h-[40px] w-[8%] text-[20px] text-red-500 transition hover:text-white hover:bg-red-500 cursor-pointer'><FaDeleteLeft /></span>
        </div>
    )
}

export default Todo