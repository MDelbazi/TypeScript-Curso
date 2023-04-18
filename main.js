"use strict";
(() => {
    class Avenger {
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
            this.antman = new Avenger('Antman', 'Avenger', 'Jeff');
        }
    }
    // private name:string;
    // private team:string;
    // public realName?: string;
    Avenger.avgAge = 35;
})();
//# sourceMappingURL=main.js.map