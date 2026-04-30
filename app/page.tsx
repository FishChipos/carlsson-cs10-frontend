import { config } from 'dotenv'
config()

import Image from 'next/image'
import Link from 'next/link'

import Title from '@/app/title'
import Button from '@/app/button'

export default function Home() {
    return (
        <div className='w-lg flex m-16 p-16 justify-center items-center text-center flex-col gap-8 bg-neutral-800 rounded-md'>
            <Title>The Shoppe</Title>
            <Link href='/login' className='w-full'><Button>Login</Button></Link>
            <Link href='/register' className='w-full'><Button>Register</Button></Link>
        </div>
    )
}
