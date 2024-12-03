import fetchSearch from '@/lib/fetchSearch'

type Props = {
  searchParams: {
    q: string;
  }
}

async function SearchPage({searchParams:{ q }}:Props) {
  const results = await fetchSearch(q)
  return (
    <div>
      {results.map((product) => (
        <div key={product.title}>
          <h2>{product.title}</h2>
          <p>{product.price}</p>
          {product.image && <img src={product.image} alt={product.title} />}
        </div>
      ))}
    </div>
  )
}

export default SearchPage