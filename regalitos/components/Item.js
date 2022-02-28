import Image from 'next/image'
import React, { useCallback, useEffect, useReducer, useRef, useState } from 'react'

import iconImg from '../images/icon-img.jpg'


import { ImBin } from 'react-icons/im'
import { itemReducer } from '../Reducer/itemReducer'
import Dropzone, { useDropzone } from 'react-dropzone'
import { BsCheckLg } from 'react-icons/bs'


export const Item = ({ id, title, img, desc, bought}) => {


    // const onDrop = useCallback( acceptedFiles => {

    // },[])


    // const { getRootProps, getInputProps, isDragActive } = useDropzone({onDrop})


    const onDrop = useCallback((acceptedFiles) => {
        acceptedFiles.forEach((file) => {
          const reader = new FileReader()
    
          reader.onabort = () => console.log('file reading was aborted')
          reader.onerror = () => console.log('file reading has failed')
          reader.onload = () => {
          // Do whatever you want with the file contents
            const binaryStr = reader.result
            console.log(binaryStr)
          }
          reader.readAsArrayBuffer(file)
        })
        
      }, [])
      const {getRootProps, getInputProps} = useDropzone({onDrop})
    






    const [edit, setEdit] = useState(false)

    const initTitleValue = 'Nombre del regalito'
    
    const [titleValue, setTitleValue] = useState(initTitleValue)

    

    const inputRef = useRef()



    const handleInputChange = (e) => {
    if (titleValue.trim().length >=3 ) {

    }
    setTitleValue(e.target.value)
    
    }


    useEffect(() => {

    const closeEdit = (e) => {
        if (e.path[0] !== inputRef.current) {
            setEdit(false)
        }
    }

    document.body.addEventListener('click', closeEdit)
    
    return () => document.body.removeEventListener('click', closeEdit)

    },[])


    useEffect(() => {
    if( titleValue.trim().length <= 3) {
        setTitleValue(initTitleValue)
    }

    if(edit === true) {
        inputRef.current.select()
    }
    },[edit])


    const handleEdit = () => {

    setEdit(!edit)

    }

    const handleSubmit = (e) => {
    e.preventDefault()
    setEdit(!edit)
    }


    const [ items, dispatch ] = useReducer(itemReducer)


    const handleDelete = (id) => {
        
        dispatch({
            type:'ITEM_DELETE',
            payload:id
        })

        console.log('BORRADO REY', id)
    }


  return (
    <div className='item' key={id}>
        {/* <Image className='img-item' src={iconImg} width='64px' height='64px' /> */}
        
            <Dropzone onDrop={acceptedFiles => (<div>{acceptedFiles}</div>)}>
    {({getRootProps, getInputProps}) => (
        <section>
        <div {...getRootProps()}>
            <input style={{backgroundColor:'red', height:150, width:150}} placeholder='HERE' {...getInputProps()} />
            <p style={{backgroundColor:'orange'}}>Drag 'n' drop some files here, or click to select files</p>
        </div>
        </section>
    )}
    </Dropzone>

        {
            edit && (<form onSubmit={(e) => handleSubmit(e)}><input ref={inputRef} autoFocus name='editInput' value={titleValue} onChange={handleInputChange} placeholder='Regalo...' /></form>) || (<div onDoubleClick={handleEdit}><h3>{titleValue}</h3></div>)
        }

        
    </div>
  )
}
