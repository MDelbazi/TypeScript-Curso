(()=>{

    type Avengers = {
        nick: string;
        ironman: string;
        vision: string;
        activo: boolean;
        poder: number;
    }
    
    const avengers:Avengers = {
        nick: 'Martin D. Rowlling',
        ironman: 'Tony Stark',
        vision: 'Paul Betanny',
        activo: true,
        poder: 1500.12321,
    }

    const prinAvenger = ({vision, ...resto}:Avengers)=>{
        console.log(vision, resto);
    }
    prinAvenger(avengers);



    const avengersArr = ['mario', false, 203.21]

    const [nombre, constante, numero] = avengersArr;
    console.log(nombre, constante, numero);



    



})()