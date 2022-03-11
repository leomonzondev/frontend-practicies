

const getPrice = () => {
    const tag = document.querySelector('[itemprop=price]')?.getAttribute('content')
    return tag ?? "No data"
}


const init = () => {
    console.log('Price:' + getPrice())
    
    const seccion =   document.querySelector('div.ui-pdp-header')
    const crear = document.createElement('div')
    crear.innerHTML = "<h3>Agregar Regalo</h3>"
    
    
    document.body.appendChild(crear)

    const columna = document.getElementsByClassName('ui-pdp-container__col col-2 mr-32')

    const injectElement =  document.createElement('div')
        injectElement.className = 'ui-pdp-header'
        injectElement.innerHTML = 'Añadir regalo'
    columna.appendChild(injectElement)
}

init()


// div.ui-pdp-prive__second-line span.andes-money-amount
// span.andes-money-amount__fraction aria-hidden.true'