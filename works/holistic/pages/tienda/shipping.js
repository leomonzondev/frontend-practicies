
import React, { useContext, useEffect, useState } from 'react';

import { urlForThumbnail } from 'utils/image'
import { Controller, useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { Store } from '/utils/Store';
import jsCookie from 'js-cookie';
import cookie from 'cookie'
import mercadopago from 'mercadopago';
import axios from 'axios';


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
    setValue('email', shippingAddress.email);
  }, [router, setValue, shippingAddress, userInfo]);
  
  const [url, setUrl] = useState('')

  const submitHandler = ({ fullName, address, city, postalCode, country, email }) => {
    dispatch({
      type: 'SAVE_SHIPPING_ADDRESS',
      payload: { fullName, address, city, postalCode, country, email },
    });
    jsCookie.set(
      'shippingAddress',
      JSON.stringify({
        fullName,
        address,
        city,
        postalCode,
        country,
        email
      })
    );

    const productos = jsCookie.get('cartItems')

    const orden = {
      fullName,
      address,
      city,
      postalCode,
      email,
      estado: "pending",
      productos,
    }
 
    axios.post("/api/ordenDeCompra", orden )
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
          <label htmlFor="email">Email</label>
          <input
            className="w-full"
            id="email"
            {...register('email', {
              required: 'Por favor ingrese email'
            })}
          />
          {errors.email && (
            <div className="text-red">{errors.email.message}</div>
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
      failure: 'https://hplistic-leob4rr0s.vercel.app/tienda/thanks/failure',
      success: 'https://hplistic-leob4rr0s.vercel.app/tienda/thanks/success',
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