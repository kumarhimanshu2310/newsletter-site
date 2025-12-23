'use client'

import { useState } from 'react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    // Simulate API call - Replace with your actual newsletter service
    setTimeout(() => {
      setStatus('success')
      setMessage('Thanks for subscribing! Check your inbox to confirm.')
      setEmail('')
    }, 1000)
  }

  return (
    <section id="subscribe" className="bg-white py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-gradient-to-br from-primary-50 to-blue-50 rounded-2xl p-8 md:p-12 border border-primary-100">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Subscribe to the Newsletter
            </h2>
            <p className="text-lg text-gray-600">
              Join our community and get the latest updates delivered to your inbox every week
            </p>
          </div>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="input-field flex-1"
                disabled={status === 'loading'}
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="btn-primary whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
              </button>
            </div>

            {status === 'success' && (
              <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800 text-center">
                {message}
              </div>
            )}

            {status === 'error' && (
              <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg text-red-800 text-center">
                {message}
              </div>
            )}

            <p className="text-sm text-gray-500 text-center mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}



