"use strict";
(() => {
    const heroe = 'Superman';
    function returnName() {
        return (heroe);
    }
    function activateBatiSignal() {
        return ('Bati signal activate !!!');
    }
    console.log(typeof (activateBatiSignal));
    const HeroeName = returnName();
})();
