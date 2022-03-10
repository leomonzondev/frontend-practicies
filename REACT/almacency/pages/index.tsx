import type { GetStaticProps, NextPage } from 'next'



import React, { useEffect } from 'react'

import { Product } from '../product/types';
import api from '../product/api'
import { Grid, Stack, Text } from '@chakra-ui/react';

interface Props {
  products: Product[]
}


const IndexRoute: React.FC<Props> = ({products}) => {
  return <Grid gridGap={6} templateColumns='repeat(auto-fill, minmax(240px, 1fr))' >
    {products.map(product => <Stack key={product.id} backgroundColor='gray.100'><Text>{product.title}</Text></Stack>)}
  </Grid>
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
