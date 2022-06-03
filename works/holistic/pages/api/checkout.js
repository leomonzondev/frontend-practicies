import mercadopago from "mercadopago"
import Cookies from 'js-cookie'

const checkoutCart = async () => {

const isProd = process.env.NODE_ENV === 'production'

// const items = JSON.parse(Cookies.get('cartItems'))

// console.log(items)


mercadopago.configure({
  access_token: "TEST-6252075855368040-052309-07d59f7fb1eddf716f2651fbe7b49b8a-220986136"
})

mercadopago.preferences.create({
    items: [
      {
        id: '656565',
        currency_id: 'ARS',
        title: 'Prueba objeto',
        quantity: 1,
        unit_price: 150
      }
    ],
  back_urls: {
    failure: '*/tienda/thanks/failure',
    success: '*/tienda/thanks/success',
  }
})
// const mercadoPagoUrl = isProd ? response.init_point : response.sandbox_init_point
const mercadoPagoUrl = response.sandbox_init_point

return mercadoPagoUrl
 
}

export default checkoutCart