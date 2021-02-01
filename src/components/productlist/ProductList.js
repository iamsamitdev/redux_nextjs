import React from 'react'
import ProductCard from '../productcard/ProductCard'

const ProductList = (props) => {

    const { products, handleBuy } = props

    // console.log(products)

    return (
        <div className="row">
            {
                products.map((item, index) => {
                    return (
                        <div className="col-md-3 mb-4" key={index}>
                            <ProductCard 
                                product={item} 
                                handleBuy={()=>{handleBuy(index)}}
                            />
                        </div>
                    )
                })
            }  
        </div>
    )
}

export default ProductList
