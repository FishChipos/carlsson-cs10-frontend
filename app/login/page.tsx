'use client'

import axios from 'axios'
import { FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import { useCookies } from 'next-client-cookies'
import Link from 'next/link'

import Button from '../button'
import TextField from '../textfield'

export default function Login() {
    const router = useRouter()
    const cookies = useCookies()

    function submit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        const formData = new FormData(event.currentTarget)

        axios
            .post(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
                email: formData.get('email'),
                password: formData.get('password'),
            })
            .then(res => {
                const jwtToken  = res.data['payload']['token']
                const name = res.data['payload']['user']['name']

                cookies.set('jwtToken', jwtToken)
                cookies.set('email', formData.get('email') as string)
                cookies.set('name', name)

                router.push('/dashboard')
            })
            .catch(error => {
                alert('Email or password is invalid!')
                console.log(error.message)
                console.log(error.response)
            })
    }

    return (
        <div className='w-lg flex m-16 p-16 justify-center items-center text-center flex-col gap-8 bg-neutral-800 rounded-md'>
            <Link href='/' className='text-neutral-500 hover:text-neutral-400 self-start cursor-pointer'>&lt; Back</Link>
            <form onSubmit={submit} className='flex flex-col justify-center items-center w-full gap-4'>
                <TextField name='email' placeholder='Email' />
                <TextField name='password' placeholder='Password' />
                <div className='w-full mt-4'>
                    <Button type='submit'>Login</Button>
                </div>
            </form>
            <div>
                Don't have an account? <Link href='/register' className='text-orange-500 hover:text-orange-400'>Register</Link>
            </div>
        </div>
    )
}
