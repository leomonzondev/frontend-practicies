(() => {

    let avengers: number = 10;

    console.log(avengers)

    const villians: number = 20


    if( avengers < villians ) {
        console.log('ESTAMOS EN PROBLEMAS')
    } else {
        console.log('A SALVO')
    }


    avengers = Number('55A')

    console.log({avengers})


})()