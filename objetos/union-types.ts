(()=>{
    type Hero = {
        name: string,
        age?:number,
        poderes:string[];
        getName?: ()=> string
    } 

    let myCustomVariable: (string | number | Hero) = 'Fernando';

    console.log(typeof myCustomVariable);

    myCustomVariable = 21;

    console.log(typeof myCustomVariable);

    myCustomVariable = {
        name: 'martin',
        age: 20,
        poderes: ['Super Velocidad'],
    
    }
    console.log(typeof myCustomVariable);

})( )