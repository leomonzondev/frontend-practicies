const deSuggestions = () => {

    const suggestions = document.querySelector("div._8UZ6e")
    suggestions.style.display = "none"
}

const suggestion = '._8UZ6e'
const disable = '{display:none}'

const enable = '{display:initial}'


const addStyle = (styleString) => {
    const style = document.createElement('style')
    style.textContent = styleString
    document.head.append(style)
}

const diSuggestion = () => {
    addStyle(suggestion + disable)
}

diSuggestion()