import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center text-center mt-32 px-6">
            <h1 className="text-5xl font-semibold mb-6">Healthcare Analytics That Actually Delivers</h1>


            <p className="max-w-2xl text-lg text-gray-700 mb-10">
                From dashboards to machine learning pipelines, Priscient helps hospitals and labs
                make decisions backed by real data.
            </p>


            <Link
                to="/contact"
                className="px-6 py-3 bg-blue-600 text-white rounded-xl text-lg hover:bg-blue-700 transition"
            >
                Get in touch
            </Link>
        </div>
    )
}