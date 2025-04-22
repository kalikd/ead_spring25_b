import { Link, useNavigate } from "react-router-dom";

function NavBar(){
    const navigate = useNavigate();
    function handleClick(event){
        event.preventDefault();
        if(false){
            alert('Already Loggedin!')
        }
        else {
            navigate('/register')
        }
    }
    return (
        <nav className="bg-gray-800 shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex space-x-8">
                        <Link 
                            to="/" 
                            className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                        >
                            Home
                        </Link>
                        <Link 
                            to="/categories" 
                            className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                        >
                            Categories
                        </Link>
                        <Link 
                            to="/about" 
                            className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                        >
                            About
                        </Link>
                        <Link 
                            to="/hcounter" 
                            className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                        >
                            Hover Counter
                        </Link>
                        <Link 
                            onClick={handleClick}
                            to="/signup" 
                            className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                        >
                            Signup
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;