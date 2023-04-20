(()=>{

    class Avenger    {
        // private name:string;
        // private team:string;
        // public realName?: string;
        static avgAge: number = 35;
        static avgAgeOld(){
            return this.name;
        }

        constructor (
            private name:string,
            private team:string,
            public realName?:string,
            ) {}

            public bio(){
                return `${this.name} (${this.team})`
            }

    }

    const antman: Avenger = new Avenger('Antman', 'Avenger', 'Jeff');
    console.log(antman);
    console.log(Avenger.avgAge);
    console.log(Avenger.avgAgeOld());
    console.log(antman.bio());



})()