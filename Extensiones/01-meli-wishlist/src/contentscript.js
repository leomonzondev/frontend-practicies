
const getPrice = () => {
    const tag = document.querySelector('[itemprop=price]')?.getAttribute('content')
    return tag ?? "No data"
}

export const deFeed = () => {

    const feed = document.querySelector("div.qF0y9.Igw0E.IwRSH.eGOV_._4EzTm")
    feed.parentElement.removeChild(feed)

}

export const deStories = () => {

    const stories = document.querySelector("div.zGtbP.IPQK5.VideM")
    stories.parentElement.removeChild(stories)
}

const deSuggestions = () => {

    const suggestions = document.querySelector("div._8UZ6e")
    suggestions.parentElement.removeChild(suggestions)
    console.log('BLOCKED')
}

const addRegalo = () => {
    const btn = document.createElement('input')
    btn.className = 'ui-pdp-bookmark'
    btn.value= "Añadir Regalo"
    btn.type = "submit"
    btn.style.margin = "10px"
    document.querySelector(".ui-pdp-container__top-wrapper.mt-40").appendChild(btn)
}

//console.log('Price:' + getPrice())
const init = () => {
    
    
    deStories()
    deSuggestions()
}

init()

