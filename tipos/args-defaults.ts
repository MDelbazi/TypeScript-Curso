(()=>{

    function fullname( firstName:string, lastName?:string, upper: boolean = false){
        
        if(upper){

            return `${firstName} ${lastName || '-----'}`.toUpperCase() ;

        }else{

            return `${firstName} ${lastName || '-----'}` ;
        }

    
    }
    
    const name = fullname('Tony', 'Stark', true);
    
    console.log(name);
    
    })()