'use client'

import axios from 'axios'
import { useState, useEffect, FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import { useCookies } from 'next-client-cookies'
import Link from 'next/link'

import Button from '../button'
import { Item, ItemCard } from './itemcard'

import { apiUrl } from '../api/api'

export default function Dashboard() {
    const cookies = useCookies()
    const router = useRouter()
    const [items, setItems] = useState([])

    useEffect(() => {
        axios
            .get(`${apiUrl}/items`)
            .then(res => {
                setItems(res.data['payload'])
            })
    }, [])

    function logout() {
        cookies.remove('jwtToken')
        cookies.remove('name')
        cookies.remove('email')

        router.replace('/')
    }

    return (
        <div className='w-full grow flex flex-col p-16 gap-8'>
            <div className='flex'>
                <div className='font-bold text-2xl grow'>Hello, {cookies.get('name')}</div>
                <div>
                    <Button onClick={logout}>Logout</Button>
                </div>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
                {items.map((item, index) => (
                    <ItemCard key={index} item={item} />
                ))}
            </div>
        </div>
    )
}
