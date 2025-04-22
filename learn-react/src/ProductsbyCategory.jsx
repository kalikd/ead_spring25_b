import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ProductByCategory() {
    const { categoryName } = useParams();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch(`https://fakestoreapi.com/products/category/${categoryName}`)
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setLoading(false);
            });
    }, [categoryName]);

    return (
        <div className="min-h-screen bg-gray-900 py-8 px-4">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-3xl font-bold text-gray-100 mb-8 text-center capitalize">
                    {categoryName.replace(/-/g, ' ')}
                </h1>

                {loading ? (
                    <div className="flex justify-center items-center h-64">
                        <div className="text-blue-400 text-2xl font-semibold">Loading...</div>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {products.map(product => (
                            <div 
                                key={product.id}
                                className="bg-gray-800 rounded-lg shadow-xl p-6 hover:shadow-blue-500/50 
                                         transform transition-all duration-200 hover:scale-105"
                            >
                                <div className="aspect-w-1 aspect-h-1 mb-4">
                                    <img 
                                        src={product.image}
                                        alt={product.title}
                                        className="w-full h-48 object-contain bg-white p-4 rounded-lg"
                                    />
                                </div>
                                <h2 className="text-lg font-semibold text-gray-100 mb-2 line-clamp-2">
                                    {product.title}
                                </h2>
                                <p className="text-blue-400 text-xl font-bold mb-2">
                                    ${product.price}
                                </p>
                                <p className="text-gray-400 text-sm line-clamp-3">
                                    {product.description}
                                </p>
                                <a href={'/products/' + product.id}
                                    className="mt-4 w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 
                                             text-white font-semibold rounded-lg transition-colors 
                                             duration-200"
                                >
                                   View Details
                                </a>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default ProductByCategory;