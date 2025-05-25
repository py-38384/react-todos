import { type ChangeEvent } from "react";

type InputPropsType = {
  newTodo: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ onChange, newTodo }: InputPropsType) => {
  return (
    <input type="text" onInput={onChange} className='box-border focus:box-border bg-slate-100 focus:outline-0 focus:border-l focus:border-t focus:border-b focus:border-slate-600 focus:bg-white text-blue-950 p-2 w-2xl h-[40px]' placeholder='Enter Your Todo...' value={newTodo} />
  )
}

export default Input