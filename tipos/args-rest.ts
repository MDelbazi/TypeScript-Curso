(() => {

const fullName = (lastName:string, firstName:string, ...restArgs: string[]): string => {

    return ( `${lastName} ${firstName} ${restArgs.join('')}`)

}  

const Rones = fullName('Martin', 'Delbazi', '22 Anios');


console.log(Rones);



})()