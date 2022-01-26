
interface Persona {
    nombreCompleto: string,
    edad: number,
    direccion: Direccion
}
    
interface Direccion {
    pais: string,
    casaNo: number
}





export const ObjetosLiterales = () => {

    const persona: Persona = {
        nombreCompleto: 'Leonardo',
        edad: 24,
        direccion: {
            pais:'Argentina',
            casaNo: 32
        }
    }




return (
    <>
        <h3>Objetos Literales</h3>
        <code>
            <pre>
                {JSON.stringify(persona, null, 2)}
            </pre>
        </code>
    </>
);
};
