document.addEventListener('DOMContentLoaded', () => {
    const random = getRandomInt(1,151)
    fetchData(random)
})


const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min
}


const fetchData = async (id) => {
    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        const data = await res.json()
        console.log(data)
        let element = document.getElementById('elem')
        element.innerHTML = 
        `
            <div class="box">
            
            <p>Nombre: ${data.name}</p>
            <p>Altura: ${data.height}</p>
            <p>Peso: ${data.weight}kg</p>
            <p>Tipo: ${data.types[0].type.name}</p>
            <img src="${data.sprites.front_default}"/>
            </div>
        `
    } catch (err) {
        console.log(err)
    }
}



fetch (`https://pokeapi.co/api/v2/pokemon/${i}/`)
.then (resp => resp.json())
.then (data => {


    for(let i = 0; i<2; i++) {

        cajas
    }
    console.log(data)
    
})
.catch(err => console.log(err))
    
