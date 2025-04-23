import React from 'react'

type Props = {}

export default function NotFound({}: Props) {
  return (
    <div className="flex min-h-screen iitem-center justify-center">
      <div className="flex flex-col iitem-center justify-center">
        <h1 className='text-3xl fornt-bold'>404</h1>
        <p className="text-lg text-orange-400">Page Not Found</p>
        <p className='text-lg text-gray-500'>THe page you are looking for does not exist.</p>
      </div>  
    </div>
  )
}