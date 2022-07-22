import React from 'react'
import './mylabel.css'


interface MyLabelProps {
    /**
     * This is the text of label
     */
    label: string;
    /**
     * Which size do you want for the text?
     */
    size: 'normal'|'h1'|'h2'|'h3';
    /**
     * Should be all Caps?
     */
    allCaps:boolean;
    /**
     * Select the color do you want
     */
    color:'primary'|'secondary'|'tertiary';
}

export const MyLabel = ({ 
    label = 'No label',
    size = 'normal',
    color ='primary',
    allCaps = false
}: MyLabelProps ) => {

  return (
    <span className={ `label ${ size  } text-${ color }` }>
        { allCaps ? label.toUpperCase() : label }
    </span>
  )
}

