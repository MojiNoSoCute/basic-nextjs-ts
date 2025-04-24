import React from 'react'

type Props = {}

export default function AdminPage({}: Props) {
  return (
    <>
        {/*Dashboard layout*/}
        <div className="flex flex-col min-h-screen bg-gray-100">
            <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
                <div>Header</div>
            </header>
            <main className="flex flex-1">
                <aside className="bg-gray-800 text-white p-4 w-64">
                    <div className="mb-4">Sidebar</div>
                    <ul className="space-y-2">
                        <li>Dashboard</li>
                        <li>Users</li>
                        <li>Settings</li>
                    </ul>
                </aside>
                <section className="flex-1 p-4">
                    {/* Main content goes here */}
                    <h1 className="text-2xl font-bold">Admin Dashboard</h1>
                </section>
            </main>
            <footer className="bg-gray-800 text-white p-4 flex justify-center items-center">
                <div>Footer</div>
            </footer>
        </div>
    </>
  )
}