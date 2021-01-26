import React from 'react'
import { ProductItem } from './ProductItem'

export const ProductListing = ({products, filter}) => {

  // Filtering
  filter !== 'all' && (products = products.filter(product => product.type.toLowerCase().includes(filter)))

  return (
    <ul className="listing">

      {products.map((product) => (
        <ProductItem
          key={product.id}
          item={product} 
        />
      ))}

    </ul>
  )
}