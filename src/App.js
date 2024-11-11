import store from './store.jpg'
import './App.css';
import products from './Products'

function App() {
  const productList =   products.map((product,index) =>{return(
    <div key={index}>
      <img src={product.image} width="200px"/>
      <h2>{product.name}</h2>
      <h4>{product.price}</h4>
      </div>)}
     )
     
  return (
    <div className="App">

       <h1>Sarah's Store</h1>
   <p> make your own Hoodies and tote bag</p>
  <img src={store} alt='store image' width="100%" height="400px"/>
  <div className='products'>
{productList}

  </div>
    </div>
  );
}

export default App;
