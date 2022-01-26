
export const TiposBasicos = () => {

    const nombre: string = 'Leonardo'
    const edad: number = 24
    const estaActivo: boolean = true

    const poderes: string[] = ['Velocidad', 'Invicibilidad', 'Fuerza', 'Respirar en el agua']

return (
    <>
        <h3>Tipos básicos</h3>
        { nombre }, { edad }, { (estaActivo) ? 'Activado' : 'Desactivado' }
        <br />
        {poderes.join(', ')}
    </>);
};
