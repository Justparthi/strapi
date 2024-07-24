// pages/index.js
import { useState } from 'react'
import Head from 'next/head'

export default function Home() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Stored data:', { name, email })
    setSubmitted(true)
  }

  return (
    <div className="container mx-auto px-4">
      <Head>
        <title>User Information Form</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mt-10">
        <h1 className="text-4xl font-bold mb-5">User Information Form</h1>
        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-2">Name:</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full p-2 border rounded"
              />
            </div>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
              Submit
            </button>
          </form>
        ) : (
          <div>
            <h2 className="text-2xl mb-3">Thank you for submitting!</h2>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
          </div>
        )}
      </main>
    </div>
  )
}
