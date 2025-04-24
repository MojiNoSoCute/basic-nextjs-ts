import React from 'react'

type Props = {}

export default function Sidebar({}: Props) {
  return (
    <aside className="bg-gray-800 text-white p-4 flex flex-col items-start">
      <div className="mb-4">Sidebar</div>
      <ul className="space-y-2">
        <li>Dashboard</li>
        <li>Users</li>
        <li>Settings</li>
      </ul>
    </aside>
  )
}