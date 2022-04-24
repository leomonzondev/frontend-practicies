import React, { ChangeEvent, useContext, useEffect, useState } from "react";
import io from "socket.io-client";

import logo from "./assets/logo.svg";
import CardState, { CardContext } from "./context/State";

import styles from "./Home.module.css";
import { Products } from "./Products";

const socket = io("http://localhost:3002");

const Home: React.FC = () => {

  const [lista, setLista] = useState('')
  const [input, setInput] = useState('')
  const [votacion, setVotacion] = useState([])
  const [cardProduct, setcardProduct] = useState('')
  const [percentage, setPercentage] = useState(0)


    
  
  const vote = (index: number) => {
    socket.emit('vote', index)
  }
  
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }
  
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    const search = () => {
      fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${input}&limit=5`)
      .then(res => res.json())
      .then(obj => setLista(obj.results))
      
      
    }
    search()
    console.log(lista);
  }
  
    
  
  useEffect(() => {
    
    socket.on('update', candidates => {
      setVotacion(candidates)
      
    })

    socket.on('update', products => {
      
      setcardProduct(products)
      console.log(products);
      console.log(cardProduct);
    })


  },[socket])

  const reset = () => {
    socket.emit('reset')
    socket.emit('')
  }

  const selectItem = (clientProduct) => {
    socket.emit('loadProduct', clientProduct)
  }

  useEffect(() => {
    setPercentage(votacion.voteA / (votacion.voteA + votacion.voteB ) * 100 ) 
    console.log(percentage);
  },[votacion])
 

  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <h1>
          <img alt="RealTrends" src={logo} width={180} />
        </h1>
        <h3>Lets get this party started</h3>
      </header>


      <div className={styles.containerApp}>
        <form className={styles.form} onSubmit={handleSearch}>
            <input placeholder='Seleccione producto A' onChange={handleInput} value={input} />
        </form>

        {
          lista && <div className={styles.searcherContainer}>
            {
              lista.map((product) => (
              <div key={product.id} onClick={() => selectItem(product)} >
                <Products img={product.thumbnail} title={product.title} price={product.price}/>
              </div>))
            }
          </div>
        }


{/* 
        {
          data.length > 0
          ? data.map(product => <Products img={product.thumbnail} title={product.title} price={product.price} />)
          : null
        } */}


      <div className={styles.wrapper}>
        <button onClick={reset}>RESET</button>
          {percentage}%

            <div className={styles.card}>
                <h1> {}Product A title</h1>
                <h3>Product A description</h3>
                <div className={styles.imageContainer} onClick={() => vote(0)} >
                  {/* <img src={cardProduct ? cardProduct.productA.image : '' }/> */}
                </div>
                <p>{votacion.voteA > 0 ? votacion.voteA : '0'} voto(s)</p>
                <div className={styles.msgBox}></div>
            </div>
      
          
          

        
            
            <div className={styles.card}>

              <h1>Product B title</h1>
              <h3>Product B description</h3>
              <div className={styles.imageContainer} onClick={() => vote(1)}></div>
              <p>{votacion.voteB > 0 ? votacion.voteB : '0'}  voto(s)</p>
              <div className={styles.msgBox}></div>
            </div>
            
          </div>
      </div>
    </main>
  );
};

export default Home;
