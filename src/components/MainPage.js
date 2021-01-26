import React, { useState, useEffect } from 'react'
import { useQueryState } from 'react-router-use-location-state'

import { Select } from './Select'
import { ProductListing } from './ProductListing'

export const MainPage = () => {
  const [data, setData] = useState([])
  const [filter, setFilter] = useQueryState('filter', '')
  const [sort, setSort] = useQueryState('sort', '')

  const filterOptions = {
    'All': 'all',
    'Fruits': 'fruit',
    'Vegetables': 'vegetable'
  }

  const sortOptions = {
    'Latest': 'latest',
    'Longest in stock': 'longest in stock'
  }

  useEffect(() => {
    fetch('dataset.json')
      .then(res => res.json())
      .then(JSON => {

        let products = JSON

        // Sort
        const sorting = option => {

          let sorted = products.sort((a, b) => b.stocked_at > a.stocked_at ? 1: -1)
          option === 'longest in stock' && sorted.reverse()

          setData(sorted)
        }
        
        sorting(sort)

    })

  }, [sort]) 

  return (
    <section className="app">

      <h1>Bosses frukt & grönt</h1>

      <div className="sorting">
        <Select
          state={filter}
          setState={setFilter} 
          options={filterOptions} 
        />

        <Select
          state={sort}
          setState={setSort} 
          options={sortOptions} 
        />
      </div>

      <ProductListing products={data} filter={filter} /> 

    </section>
  )
}
