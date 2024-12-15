import './App.css'
import { gql, useQuery } from '@apollo/client';
import Product from './components/Product';
import { GET_PRODUCTS } from './utils/queries';


function App() {


  const { loading, error, data } = useQuery(GET_PRODUCTS);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
      <div className="App">
        {
          data.products.map((product)=>(
            <Product key={product.id} product={product}/>
          ))
        }
      </div>
  )
}

export default App

