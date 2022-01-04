
export const getGif = async( category ) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=2&api_key=6d2RcBb6vbK5z4rdB0O6qGXU9x8Y1VD9`
    const res = await fetch( url )
    const { data } = await res.json()
    const gifs = data.map( gif => {
        return {
            id:gif.id,
            title:gif.title,
            url:gif.images.downsized_medium.url
        }
    })
    
    return gifs
}