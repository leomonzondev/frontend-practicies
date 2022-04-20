import React, { ChangeEvent, useEffect, useState } from "react";
import io from "socket.io-client";

import logo from "./assets/logo.svg";

import styles from "./Home.module.css";
import { Products } from "./Products";

const socket = io("http://localhost:3001");

const Home: React.FC = () => {

  useEffect(() => {
    socket.on('receive_message', data => {
    })
  }, [socket]);



  const [data, setData] = useState('')
  const [input, setInput] = useState('')
  const [vote, setVote] = useState({
    voteA: 0,
    voteB: 0
  })

  useEffect(() => {
      socket.on('receive_message', data => {

        console.log(data);
      })
        if(data == 'PA') {
          setVote({...vote, voteA: vote.voteA + 1})
        } else {
          setVote({...vote, voteB: vote.voteB + 1})
        }
      
  },[socket])

  useEffect(() => {
    console.log(data);
  },[data])

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const search = () => {
      fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${input}&limit=5`)
      .then(res => res.json())
      .then(obj => setData(obj.results))
    }
    search()
  }

  


  const handleVote = (option:string) => {
      socket.emit('send_message', {message: option})
  }

 

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
          data && <div className={styles.searcherContainer}>
            {
              data.map((product) => <Products img={product.thumbnail} title={product.title} price={product.price} />)
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
              <div id={styles.productA}  >
                  <h1> {}Product A title</h1>
                  <h3>Product A description</h3>
                  <div className={styles.imageContainer} onClick={() => handleVote('PA')} ></div>
                  <p>{vote.voteA} voto(s)</p>
                  <div className={styles.msgBox}>

                  </div>
              </div>
              

              <div id={styles.productB}>
                <h1>Product B title</h1>
                <h3>Product B description</h3>
                <div className={styles.imageContainer} onClick={() => handleVote('PB')}></div>
                <p>{vote.voteB}  voto(s)</p>
                <div className={styles.msgBox}>

                </div>
              </div>
          </div>
      </div>
    </main>
  );
};

export default Home;
