import React from 'react'
import Product from './Product';
// import products from './products-mock';
import products from './mock.json';

const ProductList = () => {
    return (
        <>
            {products.map((p, i) =>
                <Product
                    key={i}
                    product={p} />)}
        </>
    );
};

export default ProductList;
