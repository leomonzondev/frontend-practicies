

export default {
    name: 'landing',
    title: 'Landing',
    type: 'document',
    fields: [
        {
            name: 'titulo',
            title: 'Titulo',
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
            name: 'seccion',
            title: 'Seccion',
            type: 'string'
        },
        {
            name: 'orden',
            title: 'Orden',
            type: 'string'
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