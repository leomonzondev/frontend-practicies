
const deFeed = () => {

    document.querySelector("div.qF0y9.Igw0E.IwRSH.eGOV_._4EzTm").style.display= "none"
    
}

const enFeed = () => {
    document.querySelector("div.qF0y9.Igw0E.IwRSH.eGOV_._4EzTm").style.display= "initial"
}

const deStories = () => {

    document.querySelector("div.zGtbP.IPQK5.VideM").style.display = 'none'
    
}

const enStories = () => {
    document.querySelector("div.zGtbP.IPQK5.VideM").style.display = 'initial'
}


const deSuggestions = () => {

    document.querySelector("div._8UZ6e").style.display='none'
    
}

const enSuggestions = () => {

    document.querySelector("div._8UZ6e").style.display='initial'

}

const deExplorer = () => {

    const explorer = document.querySelector("div.J5g42")
    const children = explorer.childNodes
    children[3].style.display="none"

}

const enExplorer = () => {

    const explorer = document.querySelector("div.J5g42")
    const children = explorer.childNodes
    children[3].style.display="initial"
}





const init = () => {

    chrome.storage.sync.get(['story'], function (result) {
        if (result.story === true) {
            deStories()
        }
    })

    chrome.storage.sync.get(['feed'], function (result) {
        if (result.feed === true) {
            deFeed()
        }
    })

    chrome.storage.sync.get(['suggestions'], function (result) {
        if (result.suggestions === true) {
            deSuggestions()
        }
    })

    chrome.storage.sync.get(['explorer'], function(result){
        if (result.explorer === true) {
            deExplorer()
        }
      })    

    chrome.storage.onChanged.addListener(function (changes){
        for (var key in changes) {
            var storageChange = changes[key]

            if (key === 'story') {
                var newValue = storageChange.newValue
                if (newValue === true) {
                    deStories()
                }
                if (newValue === false) {
                    enStories()
                }
            }

            if (key === 'feed') {
                var newValue = storageChange.newValue
                if (newValue === true) {
                    deFeed()
                }
                if (newValue === false) {
                    enFeed()
                }
            }

            if (key === 'suggestions' ) {
                var newValue = storageChange.newValue
                if(newValue === true) {
                    deSuggestions()
                }
                if(newValue === false) {
                    enSuggestions()
                }
            }

            if (key === 'explorer') {
                var newValue = storageChange.newValue
                if(newValue === true) {
                    deExplorer()
                }
                if(newValue === false) {
                    enExplorer()
                }
            }

        }
    })
   
}

init()
