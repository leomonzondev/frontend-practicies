import { todoReducer } from "../../src/08-useReducer/todoReducer"






describe('Pruebas todo reducer', () => { 

    const initialState = [
        {
            id: 1,
            description: 'Demo todo',
            done: false
        }
    ]
    
    test('debe de re4gresar el estado inicial', () => {
        
        
        const newState = todoReducer( initialState , {})
        expect( newState ).toBe( initialState )
    })


    test('debe de agregar un todo', () => {

        const action = {
            type: '[TODO] Add Todo',
            payload: {
                id:2,
                description: 'Nuevo todo #2',
                done: false
            }
        }

        const newState = todoReducer( initialState, action )
        expect ( newState.length ).toBe( 2 )
        expect ( newState ).toContain( action.payload )

    })


})