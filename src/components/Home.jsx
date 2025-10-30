import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import Shimmer from './Shimmer'

const Home = () => {
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetchProduct();
  }, [])

  const fetchProduct = async () => {
    const data = await fetch('https://fakestoreapi.com/products');
    const json = await data.json();
    console.log(json);
    setProducts(json)
    setIsLoading(false)
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {isLoading
        ? [...Array(8)].map((_, i) => <Shimmer key={i} />)
        : products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}


    </div>
  )
}

export default Home