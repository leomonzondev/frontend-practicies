import { createContext } from "react";


const CardContext = createContext()


const CardState = ({ children }) => {

    const initialState = {
        cardItems: []
    }


    const addToCard = (product) => {




    }



    return (
        <CardContext.Provider value={{
            addToCard
        }}
    )

}

