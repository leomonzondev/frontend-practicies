import React, { useEffect, useState } from 'react'
import './styles.css'
import {GiPowerButton} from 'react-icons/gi'



export const App = () => {

  // const [power, setPower] = useState(true)

  const checkbox = () => {
    const storiesCheck = document.getElementById('storiesCheck')
    const feedCheck = document.getElementById('feedCheck')
    const suggestionsCheck = document.getElementById('suggestionsCheck')
    const explorerCheck = document.getElementById('explorerCheck')
    const storiesViews = document.getElementById('storiesViews')
  
    chrome.storage.sync.get(['story'], function (result) {
      storiesCheck.checked = result.story
    })

    chrome.storage.sync.get(['views'], function (result) {
      storiesViews.checked = result.views
    })
  
    chrome.storage.sync.get(['feed'], function(result){
      feedCheck.checked = result.feed
    })
  
    chrome.storage.sync.get(['suggestions'], function(result) {
      suggestionsCheck.checked = result.suggestions
    })

    chrome.storage.sync.get(['explorer'], function(result){
      explorerCheck.checked = result.explorer
    })
  
  
    addStorage(storiesCheck, 'change', 'story')
    addStorage(storiesViews, 'change', 'views')
    addStorage(feedCheck, 'change', 'feed')
    addStorage(suggestionsCheck, 'change', 'suggestions')
    addStorage(explorerCheck, 'change', 'explorer')
  }

  
  const addStorage = (element, eventName, key) => {
    var data = {}
    element.addEventListener(eventName, (event) => {
      if (event.target.checked) {
        data[key] = true
        chrome.storage.sync.set(data)
      } else {
        data[key] = false
        chrome.storage.sync.set(data)
      }
    })
  }

  useEffect(() => {
    checkbox()
  },[])


  const handlePower = () => {
    setPower(!power)
  }



  return (
    <div className='app'>

        <div className='title'>
          <h1>IG Monk</h1>
          {/* <GiPowerButton size={22} 
            className='powerBtn'
            color={power ? '#fa9907': '#bebebe'}
            onClick={handlePower}
          /> */}
        </div>
        <div className='hr'></div>
        <div className='wrapper'>
        {/* {
          power
          ? */}
          <ul>
            <li>
              <input type="checkbox" id="storiesCheck" className='offscreen'/>
              <label for="storiesCheck" className='switch' ></label>
              <p>Stories</p>
            </li>
            <li>
              <input type="checkbox" id="storiesViews" className='offscreen'/>
              <label for="storiesViews" className='switch' ></label>
              <p>Stories Views</p>
            </li>
            <li>
              <input type='checkbox' id='suggestionsCheck' className='offscreen' />
              <label for="suggestionsCheck" className='switch' ></label>
              <p>Suggestions</p>
            </li>
            <li>
              <input type='checkbox' id='feedCheck' className='offscreen'/>
              <label for="feedCheck" className='switch' ></label>
              <p>Feed</p>
            </li>
            <li>
              <input type='checkbox' id='explorerCheck' className='offscreen'/>
              <label for="explorerCheck" className='switch' ></label>
              <p>Explorer</p>
            </li>
          </ul>
           {/*  <h2>IG MONK OFF</h2> */}
  
          </div>


    </div>
  )
}

