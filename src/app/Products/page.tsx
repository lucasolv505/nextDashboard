"use client"

import React, { useState } from 'react'
import ProductList from './ProductList'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

function Products() {
  const [sortCriteria, SetSortCriteira] = useState('priceAsc')

  const sortedProducts = [...ProductList].sort((a, b) => {
    if (sortCriteria === 'priceAsc') {
      return a.price - b.price
    }
    else if (sortCriteria === 'priceDesc') {
      return b.price - a.price
    }
    else if (sortCriteria === 'stockAsc') {
      return a.instock - b.instock
    }
    else if (sortCriteria === 'stockDesc') {
      return b.instock - a.instock
    }
    else if (sortCriteria === 'soldAsc') {
      return a.sold - b.sold
    }
    else if (sortCriteria === 'soldDesc') {
      return b.sold - a.sold
    }
    return 0
  })

  return (
    <div className='sm:ml-14 p-4'>

      <h1 className='text-4xl mb-8'>Products</h1>

      <div className='flex'>
        Order by:
        <select className='border text=[12px] sm:text-sm text-gray-400 mb-2 ml-2' value={sortCriteria} onChange={(e) => SetSortCriteira(e.target.value)}>
          <option value="priceAsc">Price ↑</option>
          <option value="priceDesc">Price ↓</option>
          <option value="stockAsc">Stock ↑</option>
          <option value="stockDesc">Stock ↓</option>
          <option value="soldAsc">Sold ↑</option>
          <option value="soldDesc">Sold ↓</option>
        </select>
      </div>

      {sortedProducts.map((product) => (
        <div key={product.title}>
          <Card className='mb-5'>
            <CardHeader>
              <CardTitle>
                <h1 className='flex justify-center items-center lg:justify-normal'>{product.title}</h1>
              </CardTitle>
            </CardHeader>

            <CardContent>
              <div className='flex mb-4'>
                <div className='w-1/3 lg:w-[160px]'>
                  <img className='rounded-sm lg:w-full' src={product.image} alt={product.title} />
                </div>
                <div className='flex flex-col ml-5 w-1/2 lg:w-full'>
                  <p className='text=[12px] sm:text-sm text-gray-400 mb-2'>Price: U$ {product.price}</p>
                  <p className='text=[12px] sm:text-sm text-gray-400 mb-2'>In stock: {product.instock}</p>
                  <p className='text=[12px] sm:text-sm text-gray-400 mb-2'>Sold: {product.sold}</p>
                  <p className='hidden text=[12px] sm:text-sm text-gray-400 lg:block'>{product.description}</p>
                </div>
              </div>

              <p className='text=[12px] sm:text-sm text-gray-400 lg:hidden'>{product.description}</p>
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  )
}

export default Products