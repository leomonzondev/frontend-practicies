import type { GetStaticProps, NextPage } from 'next'

import React, { useEffect, useState } from 'react'

import { Product } from '../product/types';
import api from '../product/api'
import { Button, Grid, Link, Stack, Text } from '@chakra-ui/react';


interface Props {
  products: Product[]
}




const IndexRoute: React.FC<Props> = ({products}) => {


  const [cart, setCart] = useState<Product[]>([])
  const text = React.useMemo(
    () => 
    cart
      .reduce(
        (message, product) => message.concat(`* ${product.title} - $${product.price}\n`),
  ``,
  )
  .concat(`\nTotal: $${cart.reduce((total , product) => total + product.price, 0)}`),[cart])
  

  

  return <Stack>
    <Grid gridGap={6} templateColumns='repeat(auto-fill, minmax(240px, 1fr))' >
    {products.map(product => <Stack key={product.id} backgroundColor='gray.100'>
      <Text>{product.title}</Text>
      <Text>{product.price}</Text>
      <Button onClick={() => setCart(cart => cart.concat(product))} colorScheme="blue" >Agregar</Button>
    </Stack>)}

    </Grid>
    
      { cart.length && (
          <Button as={Link} colorScheme="whatsapp" href={`https://wa.me/5492216921240?text=${encodeURIComponent(text)}`} target="_blank">Completar pedido ({cart.length} productos)
          </Button>)
      }
    

  </Stack>



}

export const getStaticProps: GetStaticProps = async () => {

  const products = await api.list()

  return {
  
    props: {
      products,
    },
    revalidate: 10
  }
}

export default IndexRoute
