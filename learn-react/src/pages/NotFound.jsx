import { Link } from 'react-router-dom';

function NotFound(){
    return (
        <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
            <div className="max-w-xl mx-auto text-center">
                <h1 className="text-9xl font-bold text-blue-500">404</h1>
                <div className="mt-4 mb-8">
                    <h2 className="text-3xl font-semibold text-gray-100 mb-2">
                        Page Not Found
                    </h2>
                    <p className="text-gray-400">
                        Oops! The page you're looking for doesn't exist or has been moved.
                    </p>
                </div>
                <Link 
                    to="/"
                    className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white 
                             font-semibold rounded-lg transform transition-all duration-200 
                             hover:scale-105 inline-block"
                >
                    Return Home
                </Link>
            </div>
        </div>
    );
}

export default NotFound;