'use client'

import axios from 'axios'
import { FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

import Button from '../button'
import TextField from '../textfield'

export default function Register() {
    const router = useRouter()

    async function submit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        const formData = new FormData(event.currentTarget)

        axios
            .post(`${process.env.NEXT_PUBLIC_API_URL}/user/register`, {
                name: formData.get('name'),
                username: formData.get('username'),
                email: formData.get('email'),
                password: formData.get('password'),
                phone: formData.get('phone'),
            })
            .then(res => {
                router.push('/login')
            })
            .catch(error => {
                alert('Somethign wong')
                console.log(error.message)
                console.log(error.response)
            })
    }

    return (
        <div className='w-lg flex m-16 p-16 justify-center items-center text-center flex-col gap-8 bg-neutral-800 rounded-md'>
            <Link href='/' className='text-neutral-500 hover:text-neutral-400 self-start cursor-pointer'>&lt; Back</Link>
            <form onSubmit={submit} className='flex flex-col justify-center items-center w-full gap-4'>
                <TextField name='name' placeholder='Name' />
                <TextField name='username' placeholder='Username' />
                <TextField name='email' placeholder='Email' />
                <TextField name='password' placeholder='Password' />
                <TextField name='phone' placeholder='Phone' />
                <div className='w-full mt-4'>
                    <Button type='submit'>Register</Button>
                </div>
            </form>
            <div>
                Already have an account? <Link href='/login' className='text-orange-500 hover:text-orange-400'>Login</Link>
            </div>
        </div>
    )
}
