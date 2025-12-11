import { Link } from 'react-router-dom'


export default function Navbar() {
    return (
        <nav className="w-full px-6 py-4 flex items-center justify-between shadow-sm bg-white">
            <Link to="/" className="text-xl font-semibold">Priscient</Link>
            <div className="flex gap-6 text-lg">
                <Link to="/">Home</Link>
                <Link to="/contact" className="text-blue-600 font-medium">Contact</Link>
            </div>
        </nav>
    )
}