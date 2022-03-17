import React, { useState } from 'react'


interface IMes {
  mes1: string
  mes2: string
}



export const HomeScreen = () => {



  const [INPC, setINPC] = useState<IMes>({
    mes1: '',
    mes2: ''
  })

  const [resultado, setResultado] = useState('')


  const handleCalcular = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault()

    const mes1 = parseFloat(INPC.mes1)
    const mes2 = parseFloat(INPC.mes2)

    const calculo = (((mes2- mes1)/ mes1) * 100).toFixed(2)

    console.log(calculo);

    setResultado(calculo)

    setINPC({
      mes1: '',
      mes2: ''
    })

    console.log(INPC);
  }


  const handleInputMes1 = (e:React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value

    setINPC({...INPC, mes1: value})

  }

  const handleInputMes2 = (e:React.ChangeEvent<HTMLInputElement>) => {

    const value = e.target.value

    setINPC({...INPC, mes2: value})

  }

  return (
    <div>
        <h1>Calculadora inflación</h1>
        <hr />

        <form onSubmit={handleCalcular}>
          <input placeholder='Coloque IPC mes anterior' type="text" value={INPC.mes1}  onChange={ (e) => handleInputMes1(e)} />
          <br/>
          <input placeholder='Coloque IPC mes actual' type="text" value={INPC.mes2} onChange={ e => handleInputMes2(e)}/>
          <button>Calcular</button>
        </form>

        <input placeholder='escribi' type="number" />

      <h2>Resultado inflación del mes corriente: {resultado}% </h2>


    </div>
  )
}
