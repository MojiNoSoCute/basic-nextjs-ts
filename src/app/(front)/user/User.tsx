import React from 'react'
import { User } from  '@/types/user'

type Props = {}

async function fetchUsers(): Promise<User[]> {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')

    if (!response.ok) {
        throw new Error('Network response was not ok')
    }

    console.log('response', response)

    return response.json()
}


export default async function UserPage({}: Props) {

    const user = await fetchUsers()

   return (
        <>
            <h1 className='text-2xl text-center py-4'>User Lists</h1>
            <table className="table-auto w-full border-collapse border border-slate-500 mb-12">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="border border-gray-200 px-4 py-2">ID</th>
                        <th className="border border-gray-200 px-4 py-2">Name</th>
                        <th className="border border-gray-200 px-4 py-2">Username</th>
                        <th className="border border-gray-200 px-4 py-2">Email</th>
                    </tr>
                </thead>
                <tbody>
                    {user.map((user) => (
                        <tr key={user.id}>
                            <td className="border border-gray-200 px-4 py-2">{user.id}</td>
                            <td className="border border-gray-200 px-4 py-2">{user.name}</td>
                            <td className="border border-gray-200 px-4 py-2">{user.username}</td>
                            <td className="border border-gray-200 px-4 py-2">{user.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
  )
}