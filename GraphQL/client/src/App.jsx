import './App.css'
import { gql, useQuery } from '@apollo/client';

const GET_PRODUCTS = gql`
query Products {
  products {
    id
    name
    description
    price
    availability
  }
}
`;

function App() {


  const { loading, error, data } = useQuery(GET_PRODUCTS);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <>
          {data.products.map((product) => (
            <div key={product.id} style={{padding:'10px'}}>
              {product.name}
              <br />
              {product.description}
            </div>
      ))}

    </>
  )
}

export default App
