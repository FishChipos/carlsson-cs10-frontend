import { MouseEventHandler } from 'react';

export default function Button({ children, onClick, type }: {
    children: React.ReactNode,
    onClick?: MouseEventHandler<HTMLButtonElement>,
    type?: 'button' | 'reset' | 'submit',
}) {
    return (
        <div className='size-full transition bg-orange-500 hover:bg-orange-400 active:bg-white rounded-md'>
            <button onClick={onClick} className='size-full cursor-pointer p-2' type={type ? type : 'button'}>
                {children}
            </button>
        </div>
    )

}
