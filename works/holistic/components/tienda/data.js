
const url = 'https://i.imgur.com/oPR4BiX.jpeg'

import angelaProfile from '../../assets/images/random2.jpg'
import martinProfile from '../../assets/images/random1.jpg'
import monicaProfile from '../../assets/images/random3.jpg'

export const testimonios = [
  {
    id:1,
    img:angelaProfile,
    name:"Angela Dravitks",
    testimony:"do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea comm"
  },
  {
    id:2,
    img:martinProfile,
    name:"Martin Vladiknov",
    testimony:"do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea comm"
  },
  {
    id:3,
    img:monicaProfile,
    name:"Monica Vovnoff",
    testimony:"do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea comm"
  },

]


export const categories = [
    {
      id: 1,
      img: "https://i.imgur.com/nUCPORm.jpg",
      title: "FLORES DE BACH",
      link: 'bach'
    },
    {
      id: 2,
      img: "https://i.imgur.com/v42Pdv9.jpg",
      title: "GEMAS",
      link: 'esencias'
    },
    {
      id: 3,
      img: "https://i.imgur.com/n1o8JI2.jpg",
      title: "VELAS ARTESANALES",
      link: 'velas'
    },
  ];

export const productos = [
  {
    id:1,
    img: url,
    title:'Producto1 - esencia',
    price:256,
    description: "ESENCIAAAAAAAAAA",
    category: 'esencias'
  },
  {
    id:2,
    img:url,
    title:'Producto2 - esencia',
    price:256,
    description: "Mezclas aromáticas de aceites esenciales y esencias florales del sistema de Bach y California. Desarrolladas para trabajar sobre el cuerpo energético a nivel emocional y anímico. Lo podés utilizar para rociar tu campo áurico, la almohada, el ambiente o lo que se te ocurra.",
    category: 'esencias'
  },
  {
    id:3,
    img:url,
    title:'Producto3 - esencia',
    price:256,
    description: "Mezclas aromáticas de aceites esenciales y esencias florales del sistema de Bach y California. Desarrolladas para trabajar sobre el cuerpo energético a nivel emocional y anímico. Lo podés utilizar para rociar tu campo áurico, la almohada, el ambiente o lo que se te ocurra.",
    category: 'esencias'
  },
  {
    id:4,
    img:url,
    title:'Producto1 - velas',
    price:256,
    description: "Mezclas aromáticas de aceites esenciales y esencias florales del sistema de Bach y California. Desarrolladas para trabajar sobre el cuerpo energético a nivel emocional y anímico. Lo podés utilizar para rociar tu campo áurico, la almohada, el ambiente o lo que se te ocurra.",
    category: 'velas'
  },
  {
    id:5,
    img:url,
    title:'Producto2 - velas',
    price:256,
    description: "Mezclas aromáticas de aceites esenciales y esencias florales del sistema de Bach y California. Desarrolladas para trabajar sobre el cuerpo energético a nivel emocional y anímico. Lo podés utilizar para rociar tu campo áurico, la almohada, el ambiente o lo que se te ocurra.",
    category: 'velas'
  },
  {
    id:6,
    img:url,
    title:'Producto3 - velas',
    price:256,
    description: "Mezclas aromáticas de aceites esenciales y esencias florales del sistema de Bach y California. Desarrolladas para trabajar sobre el cuerpo energético a nivel emocional y anímico. Lo podés utilizar para rociar tu campo áurico, la almohada, el ambiente o lo que se te ocurra.",
    category: 'velas'
  },
  {
    id:7,
    img:url,
    title:'Producto1 - gemas',
    price:256,
    description: "Mezclas aromáticas de aceites esenciales y esencias florales del sistema de Bach y California. Desarrolladas para trabajar sobre el cuerpo energético a nivel emocional y anímico. Lo podés utilizar para rociar tu campo áurico, la almohada, el ambiente o lo que se te ocurra.",
    category: 'gemas'
  },
  {
    id:8,
    img:url,
    title:'Producto2 - gemas',
    price:256,
    description: "Mezclas aromáticas de aceites esenciales y esencias florales del sistema de Bach y California. Desarrolladas para trabajar sobre el cuerpo energético a nivel emocional y anímico. Lo podés utilizar para rociar tu campo áurico, la almohada, el ambiente o lo que se te ocurra.",
    category: 'gemas'
  },
  {
    id:9,
    img:url,
    title:'Producto3 - gemas',
    price:256,
    description: "Mezclas aromáticas de aceites esenciales y esencias florales del sistema de Bach y California. Desarrolladas para trabajar sobre el cuerpo energético a nivel emocional y anímico. Lo podés utilizar para rociar tu campo áurico, la almohada, el ambiente o lo que se te ocurra.",
    category: 'gemas'
  },
 
]




export const categoriaEsencia = [
  {
  id:1,
  img:url,
  title:'Producto1 - esencia',
  price:256,
  description: {
    ml: "60ml",
    principal: "Mezclas aromáticas de aceites esenciales y esencias florales del sistema de Bach y California. Desarrolladas para trabajar sobre el cuerpo energético a nivel emocional y anímico. Lo podés utilizar para rociar tu campo áurico, la almohada, el ambiente o lo que se te ocurra. ",
    efecto:"Ideal para bajar esos momentos en los que necesitás bajar un cambio y relajar. Nos permite descomprimir estados angustiosos y liberar la tensión emocional. Trae calma y serenidad y ayuda a conciliar el sueño. ",
    contiene:"Lavanda + Menta + Naranja + Esencias Florales",
    indicaciones:"Este producto es fotosensible, no exponerse al sol si lo vas a exponer en la piel."
  },
  category: 'Esencias'
},
{
  id:2,
  img:url,
  title:'Producto2 - esencia',
  price:256,
  description: {
    ml: "60ml",
    principal: "Mezclas aromáticas de aceites esenciales y esencias florales del sistema de Bach y California. Desarrolladas para trabajar sobre el cuerpo energético a nivel emocional y anímico. Lo podés utilizar para rociar tu campo áurico, la almohada, el ambiente o lo que se te ocurra. ",
    efecto:"Ideal para bajar esos momentos en los que necesitás bajar un cambio y relajar. Nos permite descomprimir estados angustiosos y liberar la tensión emocional. Trae calma y serenidad y ayuda a conciliar el sueño. ",
    contiene:"Lavanda + Menta + Naranja + Esencias Florales",
    indicaciones:"Este producto es fotosensible, no exponerse al sol si lo vas a exponer en la piel."
  },
  category: 'Esencias'
},
{
  id:3,
  img:url,
  title:'Producto3 - esencia',
  price:256,
  description: {
    ml: "60ml",
    principal: "Mezclas aromáticas de aceites esenciales y esencias florales del sistema de Bach y California. Desarrolladas para trabajar sobre el cuerpo energético a nivel emocional y anímico. Lo podés utilizar para rociar tu campo áurico, la almohada, el ambiente o lo que se te ocurra. ",
    efecto:"Ideal para bajar esos momentos en los que necesitás bajar un cambio y relajar. Nos permite descomprimir estados angustiosos y liberar la tensión emocional. Trae calma y serenidad y ayuda a conciliar el sueño. ",
    contiene:"Lavanda + Menta + Naranja + Esencias Florales",
    indicaciones:"Este producto es fotosensible, no exponerse al sol si lo vas a exponer en la piel."
  }
  ,
  category: 'Esencias'
},
]

export const categoriaVelas = [
  {
    id:4,
    img:url,
    title:'Producto1 - velas',
    price:256,
    description: "Mezclas aromáticas de aceites esenciales y esencias florales del sistema de Bach y California. Desarrolladas para trabajar sobre el cuerpo energético a nivel emocional y anímico. Lo podés utilizar para rociar tu campo áurico, la almohada, el ambiente o lo que se te ocurra.",
    category: 'Velas'
  },
  {
    id:5,
    img:url,
    title:'Producto2 - velas',
    price:256,
    description: "Mezclas aromáticas de aceites esenciales y esencias florales del sistema de Bach y California. Desarrolladas para trabajar sobre el cuerpo energético a nivel emocional y anímico. Lo podés utilizar para rociar tu campo áurico, la almohada, el ambiente o lo que se te ocurra.",
    category: 'Velas'
  },
  {
    id:6,
    img:url,
    title:'Producto3 - velas',
    price:256,
    description: "Mezclas aromáticas de aceites esenciales y esencias florales del sistema de Bach y California. Desarrolladas para trabajar sobre el cuerpo energético a nivel emocional y anímico. Lo podés utilizar para rociar tu campo áurico, la almohada, el ambiente o lo que se te ocurra.",
    category: 'Velas'
  },
]


export const categoriaGemas = [
  {
    id:7,
    img:url,
    title:'Producto1 - gemas',
    price:256,
    description: {
      ml: "60ml",
      principal: "Mezclas aromáticas de aceites esenciales y esencias florales del sistema de Bach y California. Desarrolladas para trabajar sobre el cuerpo energético a nivel emocional y anímico. Lo podés utilizar para rociar tu campo áurico, la almohada, el ambiente o lo que se te ocurra. ",
      efecto:"Ideal para bajar esos momentos en los que necesitás bajar un cambio y relajar. Nos permite descomprimir estados angustiosos y liberar la tensión emocional. Trae calma y serenidad y ayuda a conciliar el sueño. ",
      contiene:"Lavanda + Menta + Naranja + Esencias Florales",
      indicaciones:"Este producto es fotosensible, no exponerse al sol si lo vas a exponer en la piel."
    },
    category: 'Gemas'
  },
  {
    id:8,
    img:url,
    title:'Producto2 - gemas',
    price:256,
    description: {
      ml: "60ml",
      principal: "Mezclas aromáticas de aceites esenciales y esencias florales del sistema de Bach y California. Desarrolladas para trabajar sobre el cuerpo energético a nivel emocional y anímico. Lo podés utilizar para rociar tu campo áurico, la almohada, el ambiente o lo que se te ocurra. ",
      efecto:"Ideal para bajar esos momentos en los que necesitás bajar un cambio y relajar. Nos permite descomprimir estados angustiosos y liberar la tensión emocional. Trae calma y serenidad y ayuda a conciliar el sueño. ",
      contiene:"Lavanda + Menta + Naranja + Esencias Florales",
      indicaciones:"Este producto es fotosensible, no exponerse al sol si lo vas a exponer en la piel."
    },
    category: 'Gemas'
  },
  {
    id:9,
    img:url,
    title:'Producto3 - gemas',
    price:256,
    description: {
      ml: "60ml",
      principal: "Mezclas aromáticas de aceites esenciales y esencias florales del sistema de Bach y California. Desarrolladas para trabajar sobre el cuerpo energético a nivel emocional y anímico. Lo podés utilizar para rociar tu campo áurico, la almohada, el ambiente o lo que se te ocurra. ",
      efecto:"Ideal para bajar esos momentos en los que necesitás bajar un cambio y relajar. Nos permite descomprimir estados angustiosos y liberar la tensión emocional. Trae calma y serenidad y ayuda a conciliar el sueño. ",
      contiene:"Lavanda + Menta + Naranja + Esencias Florales",
      indicaciones:"Este producto es fotosensible, no exponerse al sol si lo vas a exponer en la piel."
    },
    category: 'Gemas'
  },
]



export const FAQ = [
  {
    id:1,
    pregunta:'¿A quién está dirigido?',
    respuesta:'A aquellas personas que quieran descubrir una nueva manera de comprender la salud, con vocación de ayudar a otros con herramientas holísticas y complementarias y que quieran realizar un camino de introspección personal.  '
  },
  {
    id:2,
    pregunta:'¿De cuanta es la duración del curso?',
    respuesta:'9 meses. De Abril a Diciembre dos sábados al mes'
  },
  {
    id:3,
    pregunta:'¿Cómo me inscribo?',
    respuesta:'Al hacer click en el botón de inscripción, completar el formulario.'
  },
  {
    id:4,
    pregunta:'Ya me inscribí, ¿ahora qué?',
    respuesta:'El equipo de PsicoHolistica se estará contactando a la brevedad por Email para confirmar el estado de tu inscripción.'
  },
  {
    id:5,
    pregunta:'¿Es necesario tener conocimientos previos?',
    respuesta:'No es necesario, se explicará todo lo necesario en el curso'
  },
  {
    id:6,
    pregunta:'¿Se entregan certificados?',
    respuesta:'Si, recibiras el certificado de formación correspondiente'
  },

]


// export const categoriaVelas = [
//   {
//     id:4,
//     img:url,
//     title:'Producto1 - velas',
//     price:256,
//     description: {
//       ml: "60ml",
//       principal: "Mezclas aromáticas de aceites esenciales y esencias florales del sistema de Bach y California. Desarrolladas para trabajar sobre el cuerpo energético a nivel emocional y anímico. Lo podés utilizar para rociar tu campo áurico, la almohada, el ambiente o lo que se te ocurra. ",
//       efecto:"Ideal para bajar esos momentos en los que necesitás bajar un cambio y relajar. Nos permite descomprimir estados angustiosos y liberar la tensión emocional. Trae calma y serenidad y ayuda a conciliar el sueño. ",
//       contiene:"Lavanda + Menta + Naranja + Esencias Florales",
//       indicaciones:"Este producto es fotosensible, no exponerse al sol si lo vas a exponer en la piel."
//     },
//     category: 'Velas'
//   },
//   {
//     id:5,
//     img:url,
//     title:'Producto2 - velas',
//     price:256,
//     description: {
//       ml: "60ml",
//       principal: "Mezclas aromáticas de aceites esenciales y esencias florales del sistema de Bach y California. Desarrolladas para trabajar sobre el cuerpo energético a nivel emocional y anímico. Lo podés utilizar para rociar tu campo áurico, la almohada, el ambiente o lo que se te ocurra. ",
//       efecto:"Ideal para bajar esos momentos en los que necesitás bajar un cambio y relajar. Nos permite descomprimir estados angustiosos y liberar la tensión emocional. Trae calma y serenidad y ayuda a conciliar el sueño. ",
//       contiene:"Lavanda + Menta + Naranja + Esencias Florales",
//       indicaciones:"Este producto es fotosensible, no exponerse al sol si lo vas a exponer en la piel."
//     },
//     category: 'Velas'
//   },
//   {
//     id:6,
//     img:url,
//     title:'Producto3 - velas',
//     price:256,
//     description: {
//       ml: "60ml",
//       principal: "Mezclas aromáticas de aceites esenciales y esencias florales del sistema de Bach y California. Desarrolladas para trabajar sobre el cuerpo energético a nivel emocional y anímico. Lo podés utilizar para rociar tu campo áurico, la almohada, el ambiente o lo que se te ocurra. ",
//       efecto:"Ideal para bajar esos momentos en los que necesitás bajar un cambio y relajar. Nos permite descomprimir estados angustiosos y liberar la tensión emocional. Trae calma y serenidad y ayuda a conciliar el sueño. ",
//       contiene:"Lavanda + Menta + Naranja + Esencias Florales",
//       indicaciones:"Este producto es fotosensible, no exponerse al sol si lo vas a exponer en la piel."
//     },
//     category: 'Velas'
//   },
// ]