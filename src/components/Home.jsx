import React from 'react'
import ProductCard from './ProductCard'

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-6 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <ProductCard></ProductCard>
  
    </div>
  )
}

export default Home