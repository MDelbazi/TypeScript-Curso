"use strict";
(() => {
    function fullname(firstName, lastName, upper = false) {
        if (upper) {
            return `${firstName} ${lastName || '-----'}`.toUpperCase();
        }
        else {
            return `${firstName} ${lastName || '-----'}`;
        }
    }
    const name = fullname('Tony', 'Stark', true);
    console.log(name);
})();
