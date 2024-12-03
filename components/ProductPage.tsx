import React from 'react'
import { Product } from '@/lib/fetchSearch'
import Link from 'next/link'

function ProductPage({product}:{
    product: Product
}) {
  return (
    <Link
    href={{
      pathname: '/product',
      query: { url: product.link },
    }}
    ></Link>
  )
}

export default ProductPage

