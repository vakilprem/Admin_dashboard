import React from "react";
import { useState } from 'react'
// import { toast } from 'react-toastify'
import { Toaster } from "react-hot-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = e => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async e => {
    e.preventDefault()
    const { name, email, message } = formData

    // Simple Validation
    if (!name || !email || !message) {
      toast.error('Please fill out all fields 😬')
      return
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      toast.error('Enter a valid email 📧')
      return
    }

    try {
      // Mock API Submit (you can use fetch/axios)
      await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      toast.success('Message sent successfully 🎉')
      setFormData({ name: '', email: '', message: '' })
    } catch (err) {
      toast.error('Failed to send message 😢')
    }
  }

  return (
    <div className="w-full  mx-auto bg-white dark:bg-gray-800 p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Contact Support</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="4"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
        ></textarea>

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
        >
          Send Message
        </button>
      </form>
    </div>
  )
}

export default Contact
