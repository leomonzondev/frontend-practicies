export default {
    name: 'testimonios',
    title: 'Testimonios',
    type: 'document',
    fields: [
        {
            name: 'nombre',
            title: 'Nombre',
            type: 'string'
        },
        {
            name: 'note',
            type: 'note',
            options: {
              message: 'Por el momento no añadir estilos al bloque de texto porque produce fallas en la página'
            }
        },
        {
            name: 'descripcion',
            title: 'Descripcion',
            type: 'array',
            of:[
                {
                    type:'block'
                }
            ]
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options:{
                hotspot: true
            }
        },
    ]
}