(() => {

    type Hero = {
        name: string,
        age?:number,
        poderes:string[];
        getName?: ()=> string
    }


    let flash: Hero = {
        name: 'Martin Delbazi',
        age: 20,
        poderes: ['Super Fuerza', 'Super velocidad'],
        getName(){
            return this.name;
        }
    }

    let Superman: Hero = {
        name: 'Clark Kent',
        age: 45,
        poderes: ['Super Fuerza']
    }
    

})()          