import { getSaludo } from '../../base/02-template-string'


describe('Pruebas en 02-template-string.js', () => {
    test('getSaludo debe de retornar hola leonardo', () => {

        const nombre ='Leonardo'

        const saludo = getSaludo( nombre )

        expect( saludo ).toBe( 'Hola ' + nombre)
    })
})