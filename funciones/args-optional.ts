
(()=>{

    function fullname( firstName:string, lastName?:string){
    
        return `${firstName} ${lastName || 'jaja'}` ;
    
    }
    
    const name = fullname('Tony', 'Stark');
    
    console.log(name);
    
    })()