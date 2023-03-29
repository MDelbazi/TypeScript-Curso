"use strict";
(() => {
    const fullName = (lastName, firstName, ...restArgs) => {
        return (`${lastName} ${firstName} ${restArgs.join('')}`);
    };
    const Rones = fullName('Martin', 'Delbazi', '22 Anios');
    console.log(Rones);
})();
