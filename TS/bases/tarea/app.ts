(() => {

    // Tipos
    const batman: String = 'Bruce';
    const superman: String = 'Clark';
  
    const existe: Boolean  = false;
  
    // Tuplas
    const parejaHeroes: [String, String] = [batman,superman];
    const villano: [String, number, Boolean] = ['Lex Lutor',5,true];
  
    // Arreglos
    const aliados: String[] = ['Mujer Maravilla','Acuaman','San', 'Flash'];
  
    //Enumeraciones

      enum Fuerza {
        Flash = 5,
        Superman = 100,
        Batman = 1,
        Acuaman = 0
      }

    const fuerzaFlash: Fuerza = Fuerza.Flash;
    const fuerzaSuperman: Fuerza = Fuerza.Superman;
    const fuerzaBatman: Fuerza = Fuerza.Batman;
    const fuerzaAcuaman: Fuerza = Fuerza.Acuaman;
  
    // Retorno de funciones
    function activar_batiseñal():String{
      return 'activada';
    }
    function pedir_ayuda():void{
      console.log('Auxilio!!!')
    }
  
    // Aserciones de Tipo
    const poder: any = '100';
    const largoDelPoder:number = (poder as string).length;
    console.log( largoDelPoder );
  
  
  })()
  
  