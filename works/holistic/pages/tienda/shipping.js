import { Button, List, ListItem, TextField, Typography } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';


import { urlForThumbnail } from 'utils/image'
import { Controller, useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { Store } from '/utils/Store';
import jsCookie from 'js-cookie';
import cookie from 'cookie'
import checkoutCart from 'pages/api/checkout';
import mercadopago from 'mercadopago';
import tailwindConfig from 'tailwind.config';

export default function ShippingScreen({mercadoPagoUrl}) {


  const {
    handleSubmit,
    control,
    formState: { errors },
    setValue,
    register
  } = useForm();

  const router = useRouter();

  const { state, dispatch } = useContext(Store);

  const {
    userInfo,
    cart: { shippingAddress },
  } = state;

  useEffect(() => {

    setValue('fullName', shippingAddress.fullName);
    setValue('address', shippingAddress.address);
    setValue('city', shippingAddress.city);
    setValue('postalCode', shippingAddress.postalCode);
    setValue('country', shippingAddress.country);
  }, [router, setValue, shippingAddress, userInfo]);
  
  const [url, setUrl] = useState('')


  // const theme = createMuiTheme({
  //   palette: {
  //     primary: {
  //       main: tailwindConfig.theme.colors.purpleAccent
  //     },
  //   },
  // });


  const submitHandler = ({ fullName, address, city, postalCode, country }) => {
    dispatch({
      type: 'SAVE_SHIPPING_ADDRESS',
      payload: { fullName, address, city, postalCode, country },
    });
    jsCookie.set(
      'shippingAddress',
      JSON.stringify({
        fullName,
        address,
        city,
        postalCode,
        country,
      })
    );
 
    
    dispatch({type:"CART_CLEAR"})
    router.push(`${mercadoPagoUrl}`);

  };




  return (
    <>

      <form
        className="mx-auto max-w-screen-md"
        onSubmit={handleSubmit(submitHandler)}
      >
        <h1 className="mb-4 text-xl">Datos de contacto</h1>
        <div className="mb-4">
          <label htmlFor="fullName">Nombre completo</label>
          <input
            className="w-full"
            id="fullName"
            autoFocus
            {...register('fullName', {
              required: 'Por favor ingrese nombre completo',
            })}
          />
          {errors.fullName && (
            <div className="text-red">{errors.fullName.message}</div>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="address">Dirección</label>
          <input
            className="w-full"
            id="address"
            {...register('address', {
              required: 'Por favor ingrese dirección',
              minLength: { value: 3, message: 'Address is more than 2 chars' },
            })}
          />
          {errors.address && (
            <div className="text-red">{errors.address.message}</div>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="city">Ciudad</label>
          <input
            className="w-full"
            id="city"
            {...register('city', {
              required: 'Por favor ingrese ciudad',
            })}
          />
          {errors.city && (
            <div className="text-red ">{errors.city.message}</div>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="postalCode">Código postal</label>
          <input
            className="w-full"
            id="postalCode"
            {...register('postalCode', {
              required: 'Por favor ingrese código postal',
            })}
          />
          {errors.postalCode && (
            <div className="text-red ">{errors.postalCode.message}</div>
          )}
        </div>
        <div className="mb-4 flex justify-between">
          <button className="primary-button">Continuar</button>
        </div>
      </form>



      
      {/* <form onSubmit={handleSubmit(submitHandler)} className="mt-20 px-20 h-screen">
        <Typography component="h1" variant="h1">
          Datos de contacto
        </Typography>
        <List className='dark:text-white'>
          <ListItem >
            <Controller
              name="fullName"
              control={control}
              defaultValue=""
              rules={{
                required: true,
                minLength: 2,
              }}
              render={({ field }) => (
                <TextField
                  variant="outlined"
                  fullWidth
                  id="fullName"
                  className='dark:border-darkAccent-200 border-lightAccent-200 focus:dark:border-darkAccent-200 focus:border-solid focus:border-2'
                  label="Full Name"
                  inputProps={{ type: 'fullName' }}
                  error={Boolean(errors.fullName)}
                  helperText={
                    errors.fullName
                      ? errors.fullName.type === 'minLength'
                        ? 'Full Name length is more than 1'
                        : 'Full Name is required'
                      : ''
                  }
                  {...field}
                ></TextField>
              )}
            ></Controller>
          </ListItem>
          <ListItem>
            <Controller
              name="address"
              control={control}
              defaultValue=""
              rules={{
                required: true,
                minLength: 2,
              }}
              render={({ field }) => (
                <TextField
                  variant="outlined"
                  fullWidth
                  id="address"
                  label="Address"
                  className='text-lightAccent-200 dark:text-darkAccent-200'
                  inputProps={{ type: 'address' }}
                  error={Boolean(errors.address)}
                  helperText={
                    errors.address
                      ? errors.address.type === 'minLength'
                        ? 'Address length is more than 1'
                        : 'Address is required'
                      : ''
                  }
                  {...field}
                ></TextField>
              )}
            ></Controller>
          </ListItem>
          <ListItem>
            <Controller
              name="city"
              control={control}
              defaultValue=""
              rules={{
                required: true,
                minLength: 2,
              }}
              render={({ field }) => (
                <TextField
                  variant="outlined"
                  fullWidth
                  id="city"
                  label="City"
                  inputProps={{ type: 'city' }}
                  error={Boolean(errors.city)}
                  helperText={
                    errors.city
                      ? errors.city.type === 'minLength'
                        ? 'City length is more than 1'
                        : 'City is required'
                      : ''
                  }
                  {...field}
                ></TextField>
              )}
            ></Controller>
          </ListItem>
          <ListItem>
            <Controller
              name="postalCode"
              control={control}
              defaultValue=""
              rules={{
                required: true,
                minLength: 2,
              }}
              render={({ field }) => (
                <TextField
                  variant="outlined"
                  fullWidth
                  id="postalCode"
                  label="Postal Code"
                  inputProps={{ type: 'postalCode' }}
                  error={Boolean(errors.postalCode)}
                  helperText={
                    errors.postalCode
                      ? errors.postalCode.type === 'minLength'
                        ? 'Postal Code length is more than 1'
                        : 'Postal Code is required'
                      : ''
                  }
                  {...field}
                ></TextField>
              )}
            ></Controller>
          </ListItem>
          <ListItem>
            <Controller
              name="country"
              control={control}
              defaultValue=""
              rules={{
                required: true,
                minLength: 2,
              }}
              render={({ field }) => (
                <TextField
                  variant="outlined"
                  fullWidth
                  id="postalCode"
                  label="Country"
                  inputProps={{ type: 'country' }}
                  error={Boolean(errors.country)}
                  helperText={
                    errors.country
                      ? errors.country.type === 'minLength'
                        ? 'Country length is more than 1'
                        : 'Country is required'
                      : ''
                  }
                  {...field}
                ></TextField>
              )}
            ></Controller>
          </ListItem>
          <ListItem>
            <Button variant="contained" type="submit" fullWidth className='dark:outline-darkAccent-200 hover:dark:bg-darkAccent-200 hover:bg-lightAccent-200' >
              Continuar
            </Button>
          </ListItem>
        </List>
      </form> */}
</>
  );
}


export async function getServerSideProps(context) {

  const {params, req, res, query} = context
  
  let items = ""

  req.headers.cookie ? items = cookie.parse(req.headers.cookie) : items = ""

  const payItem = JSON.parse(items.cartItems)

  const productos = payItem.map(item => ({id: item._id, currency_id: 'ARS', title:item.name, quantity:item.quantity, unit_price:item.price, picture_url:urlForThumbnail(item.image)}))

  mercadopago.configure({
    access_token: "TEST-6252075855368040-052309-07d59f7fb1eddf716f2651fbe7b49b8a-220986136"
  })

  const { response } = await mercadopago.preferences.create({
    items: productos,
    shipments:{
      cost: 700
    },
    back_urls: {
      failure: 'http://localhost:3000/tienda/thanks/failure',
      success: 'http://localhost:3000/tienda/thanks/success',
    },
    
  })


  // const mercadoPagoUrl = isProd ? response.init_point : response.sandbox_init_point


  const mercadoPagoUrl = response.sandbox_init_point
  

  const isProd = process.env.NODE_ENV === 'production'
 

  return{
    props: {
      mercadoPagoUrl
    }
  }
}