import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { MdKeyboardArrowRight } from 'react-icons/md'



export const Faq = ({question, i}) => {

    const [selected, setSelected] = useState(null)

    const handleToggle = (i) => {

        if (selected === i) {
            return setSelected(null)
        }


        setSelected(i)

    }
  return (
    <motion.div
        key={selected}
        initial={{ height: "72px"}}
        animate={{ height: "auto"}}
        exit={{ height: "72px"}}
        transition={{ duration: .4}}
        className="overflow-hidden"
        >
        <div onClick={() => handleToggle(i)} className="text-white bg-lightAccent-300 dark:bg-darkAccent-100 flex justify-between px-2 items-center cursor-pointer py-5 " >
            <h2 className='text-2xl font-bold '>{question.pregunta}</h2>
            <MdKeyboardArrowRight size={24} className={`${selected === i ? 'rotate-90' : 'rotate-0' } transition-all duration-300  `} />
        </div>
        <div className={`${selected === i ? 'show' : 'hide' } bg-lightTitles font-medium dark:bg-lightBlack text-lightBlack dark:text-white text-xl mb-2 transition ease duration-200 p-5`}>
            <p>{question.respuesta[0].children[0].text}</p>

        </div>
    </motion.div>
  )
}
