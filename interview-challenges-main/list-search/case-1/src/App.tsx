import type {Product} from "./types";

import {useEffect, useState} from "react";

import api from "./api";

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [query, setQuery] = useState<string>("");

  useEffect(() => {
    api.search(query.toLowerCase()).then(setProducts);
  }, [query]);


  const handleInput = (e:React.ChangeEvent<HTMLInputElement>) => {
    const low = e.target.value.toLowerCase()
    setQuery(low)
  }

  const options1 = {style: 'currency', currency: 'ARS'}
  const numberFormat1 = new Intl.NumberFormat('es-AR', options1)

  return (
    <main>
      <h1>Tienda digitaloncy</h1>
      <input name="text" placeholder="tv" type="text" onChange={handleInput} />
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h4>{product.title}</h4>
            <p>{product.description}</p>
            <span> {numberFormat1.format(product.price)}</span>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default App;
