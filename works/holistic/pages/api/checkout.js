import mercadopago from "mercadopago"


const checkoutCart = async (itemsCart) => {

const isProd = process.env.NODE_ENV === 'production'

mercadopago.configure({
  access_token: "TEST-6252075855368040-052309-07d59f7fb1eddf716f2651fbe7b49b8a-220986136"
})

const { response } = await mercadopago.preferences.create({
  items: itemsCart,
  back_urls: {
    failure: 'http://localhost:3000/tienda/thanks/failure',
    success: 'http://localhost:3000/tienda/thanks/success',
  }
})
const mercadoPagoUrl = isProd ? response.init_point : response.sandbox_init_point
// const mercadoPagoUrl = response.init_point

return mercadoPagoUrl
 
}

export default checkoutCart