import React, { memo, useEffect, useLayoutEffect, useState, useRef } from 'react'
import { useChromeStorageSync } from 'use-chrome-storage'
import './styles.css'




export const App = () => {

  const checkbox = () => {
    const storiesCheck = document.getElementById('storiesCheck')
    const feedCheck = document.getElementById('feedCheck')
    const suggestionsCheck = document.getElementById('suggestionsCheck')
    const explorerCheck = document.getElementById('explorerCheck')
  
    chrome.storage.sync.get(['story'], function (result) {
      storiesCheck.checked = result.story
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

  const loaded = window.addEventListener('DOMContentLoaded', null)


  useEffect(() => {
    checkbox()

  },[loaded])

  return (
    <div className='app'>

        <h1>IG Monk</h1>
        <div className='hr'></div>
        <div className='wrapper'>
        <ul>
          <li>
            <input type="checkbox" id="storiesCheck" className='offscreen'/>
            <label for="storiesCheck" className='switch' ></label>
            <p>Stories</p>
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
        </div>
    </div>
  )
}

