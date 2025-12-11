import { useState } from 'react'

export default function Contact() {
    const [form, setForm] = useState({ name: '', email: '', message: '' })


    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Form submitted:', form)
        alert('Thanks! We will get back to you soon.')
    }


    return (
        <div className="max-w-xl mx-auto mt-20 px-6">
            <h2 className="text-4xl font-semibold mb-6">Contact Us</h2>
            <p className="text-gray-700 mb-10">
                Tell us what you need. We’ll reach out within 24–48 hours.
            </p>


            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <input
                    name="name"
                    type="text"
                    placeholder="Your Name"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg"
                    required
                />


                <input
                    name="email"
                    type="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg"
                    required
                />


                <textarea
                    name="message"
                    placeholder="Your message"
                    value={form.message}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg h-32"
                    required
                />


                <button
                    type="submit"
                    className="px-6 py-3 bg-blue-600 text-white rounded-xl text-lg hover:bg-blue-700 transition"
                    >
                    Send
                </button>
            </form>
        </div>
    )
}