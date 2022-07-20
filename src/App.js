
import './App.css';

import {useState, useEffect} from 'react';

const url = "http://localhost:3000/products"

function App() {
  const [products, setProducts] = useState([])
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")

  useEffect(() =>{
    async function fetchData(){
      
      const res = await fetch(url);

      const data = await res.json()

      setProducts(data);
    }

    fetchData();

  }, []);

  // adicionando prodrutos
  const handleSubmit = async (e) => {
    e.preventDefault()
    const product ={
      name, price,
    };

    const res = await fetch(url, {
      method:   "POST", 
      headers: {
        "Content-type" : "application/json",
      },
      body: JSON.stringify(product)
    })

  }

  return (
    <div className="App">
      <h1>Lista de produtos em http</h1>
      <ul>
        {products.map((product) =>(
          <li key={product.id}>{product.name} - R$: {product.price}</li>
        ))}
      </ul>
      <div className="add-product">
        <form onSubmit={handleSubmit}>
          Nome: 
          <label>
            <input type="text" 
            placeholder='Nome do pruduto'
            value={name} 
            onChange={(e) => setName(e.target.value)} />
          </label>
          Preço: 
          <label>
            <input type="price" 
            placeholder='Adicione o preço'
            value={price} 
            onChange={(e) => setPrice(e.target.value)} />
          </label>
          <input type='submit' value="Adicionar" />
        </form>
      </div>
    </div>
  );
}

export default App;
