import React, { useState } from 'react';
import './App.css';
import productData from './products.json';
import Product from './components/Product';

function App() {
  const [products, setProducts] = useState(productData);

  function handleDelete(_id) {
    const filtered = products.filter(product => product._id !== _id);
    setProducts(filtered);
  };

  function handleSearch(e) {
    if (e.target.value === "") {
      setProducts(productData);
    } else {
      const filtered = products.filter(product => product.name.toLowerCase().includes(e.target.value));
      setProducts(filtered);
    }
  };

  return (
    <div className="cart">
      <h1>My shopping cart</h1>
      <input type="text" placeholder="Nice placeholder" onChange={e => handleSearch(e)}/>
      {products.map(product => {
        return <Product key={product._id} product={product} onDelete={handleDelete}/>
      })}
    </div>
  );
}

export default App;
