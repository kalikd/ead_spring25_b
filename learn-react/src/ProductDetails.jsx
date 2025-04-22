import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetails() {
    const {pid} = useParams();
    const [product, setProduct] = useState({});
    const [pageNo, setPageNo] = useState(pid || 1);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch('https://fakestoreapi.com/products/' + pid).
            then(res => res.json()).
            then(product => {
                setLoading(false);
                setProduct(product)
            })
    }, [pid])

    return (
        <div className="min-h-screen bg-gray-900 py-8 px-4">
            <div className="max-w-4xl mx-auto">
                {loading ? (
                    <div className="flex justify-center items-center h-64">
                        <div className="text-blue-400 text-2xl font-semibold">Loading...</div>
                    </div>
                ) : (
                    <>
                        <h1 className="text-3xl font-bold text-gray-100 mb-8 text-center">Product</h1>
                        <div className="bg-gray-800 rounded-lg shadow-xl p-6 mb-6" key={product.id}>
                            <h2 className="text-xl font-semibold text-gray-100 mb-4">{product.title}</h2>
                            <div className="flex flex-col md:flex-row gap-6">
                                <div className="flex-shrink-0">
                                    <img 
                                        className="w-full md:w-48 h-48 object-contain bg-white p-4 rounded-lg" 
                                        src={product.image} 
                                        alt={product.title} 
                                    />
                                </div>
                                <div className="flex-grow">
                                    <p className="text-2xl font-bold text-blue-400 mb-4">
                                        ${product.price}
                                    </p>
                                    <p className="text-gray-300 text-sm leading-relaxed">
                                        {product.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </>
                )}
                {/* <div className="flex justify-center">
                    <button 
                        className="px-6 py-2 bg-gray-800 hover:bg-gray-700 text-gray-100 
                                 font-semibold rounded-lg transform transition-all duration-200 
                                 hover:scale-105 active:scale-95 shadow-lg 
                                 hover:shadow-blue-500/50"
                        onClick={() => setPageNo(pageNo + 1)}
                    >
                        Next Product
                    </button>
                </div> */}
            </div>
        </div>
    )
}

export default ProductDetails;