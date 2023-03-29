"use strict";
(() => {
    function fullname(firstName, lastName) {
        return `${firstName} ${lastName || 'jaja'}`;
    }
    const name = fullname('Tony', 'Stark');
    console.log(name);
})();
