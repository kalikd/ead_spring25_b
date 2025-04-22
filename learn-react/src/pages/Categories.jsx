import { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';

function Categories() {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/categories')
            .then(res => res.json())
            .then(data => {
                setCategories(data);
                setLoading(false);
            });
    }, []);

    // Function to get icon based on category
    const getCategoryIcon = (category) => {
        const icons = {
            electronics: '🖥️',
            jewelry: '💍',
            "men's clothing": '👔',
            "women's clothing": '👗'
        };
        return icons[category] || '📦';
    };

    return (
        <div className="min-h-screen bg-gray-900 py-8 px-4">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold text-gray-100 mb-8 text-center">
                    Product Categories
                </h1>
                
                {loading ? (
                    <div className="flex justify-center items-center h-64">
                        <div className="text-blue-400 text-2xl font-semibold">Loading...</div>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {categories.map((category) => (
                            <Link 
                                key={category}
                                to={`/categories/${category}`}
                                className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 
                                         transform transition-all duration-200 hover:scale-105 
                                         shadow-lg hover:shadow-blue-500/50"
                            >
                                <div className="flex items-center space-x-4">
                                    <span className="text-4xl">{getCategoryIcon(category)}</span>
                                    <div>
                                        <h2 className="text-xl font-semibold text-gray-100 capitalize">
                                            {category.replace("'s", 's')}
                                        </h2>
                                        <p className="text-gray-400 text-sm mt-1">
                                            Click to view products
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
            <Outlet />
        </div>
    );
}

export default Categories;