import React from 'react'
import Input from './Input'
import Button from './Button'
import Todo from './Todo';

const Main = () => {
    return (
        <div className='min-h-[100vh] flex justify-center items-center bg-slate-200'>
            <div>
                <div>
                    <Input />
                    <Button />
                </div>
                <div className='mt-2 flex flex-col gap-y-2'>
                    <Todo/>
                </div>
            </div>
        </div>
    )
}

export default Main