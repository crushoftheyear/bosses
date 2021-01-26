import React from 'react'

export const ProductItem = ({item}) => {
  const { name, stocked_at } = item

  return (
    <li className="item">
      <h4>{name}</h4>
      <time>{stocked_at.slice(0, 10)}</time>
    </li>
  )
}