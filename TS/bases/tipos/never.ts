(() => {

    const error = ( msg: string ):never => {

        throw new Error(msg)

    }

    error('asdads')

})()