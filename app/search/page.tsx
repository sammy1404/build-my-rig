import fetchSearch from '@/lib/fetchSearch'
import Link from 'next/link';
import Image from 'next/image';

type Props = {
  searchParams: Promise<{
    q: string;
  }>
}

async function SearchPage({searchParams}:Props) {
  const { q } = await searchParams;
  const results = await fetchSearch(q)
  return (


      <div className='p-10'>
      <h1 className='text-3xl font-bold mb-2'>Results for {q}</h1>
      <h2 className='mb-5 text-gray-400'>
        ({results.length} results)
      </h2>

      <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
        {results?.map(product => (
          <li key={product.link} className='border p-4 rounded'>
            <Image 
              src={product.image || ''} 
              alt={product.title} 
              className='w-full h-auto mb-2' 
            />
            <h3 className='font-semibold'>{product.price}</h3>
            <p className='text-lg text-gray-800'>{product.title}</p>
            <Link 
              href={product.link || '#'} 
              className='text-blue-500 hover:underline'
            >
              View Product
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SearchPage