"use strict";
(() => {
    class Avenger {
        static avgAgeOld() {
            return this.name;
        }
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
        bio() {
            return `${this.name} (${this.team})`;
        }
    }
    // private name:string;
    // private team:string;
    // public realName?: string;
    Avenger.avgAge = 35;
    const antman = new Avenger('Antman', 'Avenger', 'Jeff');
    console.log(antman);
    console.log(Avenger.avgAge);
    console.log(Avenger.avgAgeOld());
    console.log(antman.bio());
})();
//# sourceMappingURL=main.js.map