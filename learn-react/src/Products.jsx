import { useEffect, useState } from "react";

function Products() {
    const [product, setProduct] = useState({});
    const [pageNo, setPageNo] = useState(1);
    useEffect(() => {
        fetch('https://fakestoreapi.com/products/' + pageNo).
            then(res => res.json()).
            then(product => setProduct(product));
    }, [pageNo])
    return (
        <div>
            <h1 className="font-bold">Product Details</h1>
            {
                product && (
                    <div key={product.id}>
                        <h3>{product.title}</h3>
                        <p className="text-xs">{product.description}</p>
                        <img width={80} src={product.image} alt={product.title} />
                    </div>
                )
            }
            <button
                className="bg-[#000000] text-white p-2 rounded-lg"
                onClick={() => setPageNo(pageNo + 1)}
                >
                Next Page</button>
        </div>
    )
}
export default Products;