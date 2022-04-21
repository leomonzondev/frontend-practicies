import React, { ChangeEvent, useContext, useEffect, useState } from "react";
import io from "socket.io-client";

import logo from "./assets/logo.svg";
import CardState, { CardContext } from "./context/State";

import styles from "./Home.module.css";
import { Products } from "./Products";

const socket = io("http://localhost:3001");

const Home: React.FC = () => {

  const [lista, setLista] = useState('')
  const [input, setInput] = useState('')
  const [votacion, setVotacion] = useState([])


  const { addToVote, listItems } = useContext(CardContext)
    
    
    // useEffect(() => {
      //   socket.on('receive_message', data => {
        //   })
  // }, [socket]);
  
  // useEffect(() => {
    //     socket.on('receive_message', data => {
      
      //       if(data.message == 'PA') {
        //         setVote({...vote, voteA: + 2})
        //       } 
        //       if(data.message == 'PB') {
          //         setVote({...vote, voteB:  + 1})
          //       }
          //       console.log(data);
          //     })
          
          // },[socket])
  useEffect(() => {

    socket.on('update', candidates => {

      setVotacion(candidates)
    })

  },[socket])
          
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

  


  // const handleVote = (option:string) => {
  //     socket.emit('send_message', {message: option})
  // }


  const reset = () => {
    socket.emit('reset')
    addToVote([])
  }

  const selectItem = (product) => {
    addToVote(product)
    console.log(listItems);
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
              <div id={styles.productA}  >
                  <h1> {}Product A title</h1>
                  <h3>Product A description</h3>
                  <div className={styles.imageContainer} onClick={() => vote(0)} >
                    <img src={listItems[0]?.thumbnail} />
                  </div>
                  <p>{votacion.voteA} voto(s)</p>
                  <div className={styles.msgBox}>

                  </div>
              </div>
              

              <div id={styles.productB}>
                <h1>Product B title</h1>
                <h3>Product B description</h3>
                <div className={styles.imageContainer} onClick={() => vote(1)}></div>
                <p>{votacion.voteB}  voto(s)</p>
                <div className={styles.msgBox}>

                </div>
              </div>
          </div>
      </div>
    </main>
  );
};

export default Home;
