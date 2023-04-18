(() => {


    let flash: {name:string, age?: number, poderes: string[], getName?: () => string} = {
        name: 'Martin Delbazi',
        age: 20,
        poderes: ['Super Fuerza', 'Super velocidad']
    }

    let Superman: {name:string, age?: number, poderes: string[], getName?: () => string} = {
        name: 'Martin Delbazi',
        age: 20,
        poderes: ['Super Fuerza']
    }


    flash = {
        name: 'Clark Kent',
        // age: 21;
        poderes:['Invisibilidad'],

         getName(){

            return this.name;
         }
    }
    
    console.log(flash);

})()                            
