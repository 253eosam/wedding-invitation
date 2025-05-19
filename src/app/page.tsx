'use client'

import { useState } from 'react'

export default function Home() {
  const [count, setCount] = useState(0)

  return (
    <div className="h-dvh flex flex-col gap-y-4 justify-center items-center">
      <p> {count} </p>
      <button className="border p-4 rounded-md hover:bg-gray-600 hover:text-white" onClick={() => setCount((pre) => pre + 1)}>
        add button
      </button>
    </div>
  )
}
