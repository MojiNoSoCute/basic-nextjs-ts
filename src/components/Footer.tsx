import React from 'react'

type Props = {}

export default function Footer({}: Props) {
  return (
    <footer className="bg-gray-800 text-white p-4 text-center">
      <p>&copy; {new Date().getFullYear()} MyApp. All rights reserved.</p>
        <p>Follow us on:</p>
    </footer>
  )
}