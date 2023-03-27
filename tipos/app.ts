(() => {

    // Tipos
    const batman: string= 'Bruce';
    const superman: string = 'Clark';
  
    const existe: boolean = false;
  
    // Tuplas
    const parejaHeroes: [string, string] = [batman,superman];
    const villano:[string,number,boolean] = ['Lex Lutor',5,true];

    // Arreglos
    const aliados: string[]= ['Mujer Maravilla','Acuaman','San', 'Flash'];
  
    //Enumeraciones

    enum FuerzaHeroes {
      Acuaman = 0,
      Batman = 1,
      Flash = 5,
      Superman = 100
    }

    const fuerzaFlash: FuerzaHeroes = FuerzaHeroes.Flash;
    const fuerzaSuperman: FuerzaHeroes = FuerzaHeroes.Superman;
    const fuerzaBatman: FuerzaHeroes = FuerzaHeroes.Batman;
    const fuerzaAcuaman: FuerzaHeroes = FuerzaHeroes.Acuaman;


    console.log(FuerzaHeroes);
  
    // Retorno de funciones
    function activar_batiseñal(): string{
      return 'activada';
    }
    function pedir_ayuda(): void{
      console.log('Auxilio!!!');
    }
    pedir_ayuda();
    activar_batiseñal();
    // Aserciones de Tipo
    const poder: any = '100';
    const largoDelPoder:number = (poder as string).length;
    console.log( largoDelPoder );
    
    poder as string;
    console.log(poder);

  
  
  })()
  
  