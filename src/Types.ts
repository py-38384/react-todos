import { type Dispatch, type SetStateAction } from 'react';

type todoType = {
    id: number,
    date: string,
    text: string
}

type todoContextType = {
    todos: todoType[],
    setTodos: Dispatch<SetStateAction<todoType[]>>
}

export type {todoType, todoContextType}