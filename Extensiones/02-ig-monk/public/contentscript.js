/*ELEMENT SELECTORS*/
const FEED = '.wG4fl.UDpcu > section:nth-child(1) > div:nth-child(1) > div:nth-child(3)'
const STORIES = '.wG4fl.UDpcu > section:nth-child(1) > div:nth-child(1) > div:nth-child(2) '
const SUGGESTIONS = '.COOzN.MnWb5.YT6rB > ._8UZ6e'
const EXPLORER = '.J5g42 > div:nth-child(4)'
const VIEWS = '.sqdOP.yWX7d.y3zKF > .qF0y9.Igw0E.rBNOH.eGOV_._4EzTm'
  
// '.CZW53.N2s2W > .qF0y9.Igw0E.IwRSH.eGOV_._4EzTm'
/*VISIBLE STATE*/
const DISABLE = '{display:none}';
const ENABLE = '{display:initial}';

function addStyle(state) {
    const style = document.createElement('style');
    style.textContent = state;
    document.head.append(style);
}

/*FEED*/
const enFeed = () => {
    addStyle(FEED + ENABLE)
}
const deFeed = () => {
    addStyle(FEED + DISABLE)
}

/*STORIES*/
const enStories = () => {
    addStyle(STORIES + ENABLE)
}
const deStories = () => {
    addStyle(STORIES + DISABLE)
}

/*SUGGESTIONS*/
const enSuggestions = () => {
    addStyle(SUGGESTIONS + ENABLE)
}
const deSuggestions = () => {
    addStyle(SUGGESTIONS + DISABLE)
}

/*EXPLORER*/
const enExplorer = () => {
    addStyle(EXPLORER + ENABLE)
}
const deExplorer = () => {
    addStyle(EXPLORER + DISABLE)
}

/*STORIES VIEWS*/

const enViews = () => {
    addStyle(VIEWS + ENABLE)
}

const deViews = () => {
    addStyle(VIEWS + DISABLE)
}


/*STORAGE MANAGER*/
const init = () => {
    
        chrome.storage.sync.get(['story'], function (result) {
            if (result.story === true) {
                deStories()
            }
        })

        chrome.storage.sync.get(['views'], function (result) {
            if (result.views === true) {
                deViews()
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

                if (key === 'views') {
                    var newValue = storageChange.newValue
                    if (newValue === true) {
                        deViews()
                    }
                    if (newValue === false) {
                        enViews()
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
