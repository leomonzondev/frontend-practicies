import { Box, Typography } from '@mui/material';
import React from 'react'
import { ShopLayout } from '../components/layouts';

const Custom404 = () => {
  return (
    <ShopLayout title={'Page Not Found'} pageDescription={'No hay en este sitio'}>
        <Box display='flex' justifyContent='center' alignItems='center' height='calc(100vh - 200px)' sx={{flexDirection:{ xs:'column', sm:'row'}}} >
            <Typography variant='h1' component='h1' fontSize={100} fontWeight={150} >404 |</Typography>
            <Typography variant='h1' component='h1' fontSize={50} fontWeight={100} marginLeft={2} >No hay nada aquí</Typography>
        </Box>


    </ShopLayout>
  )
}

export default Custom404