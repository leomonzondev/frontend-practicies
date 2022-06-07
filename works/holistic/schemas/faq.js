export default {
    name: 'faq',
    title: 'Preguntas frecuentes',
    type: 'document',
    fields: [
        {
            name: 'pregunta',
            title: 'Pregunta',
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
            name: 'respuesta',
            title: 'Respuesta',
            type: 'array',
            of:[
                {
                    type:'block'
                }
            ]
        },
        {
            name: 'orden',
            title: 'Orden',
            type: 'string'
        },
    ]
}