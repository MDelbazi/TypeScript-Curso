"use strict";
(() => {
    // Tipos
    const batman = 'Bruce';
    const superman = 'Clark';
    const existe = false;
    // Tuplas
    const parejaHeroes = [batman, superman];
    const villano = ['Lex Lutor', 5, true];
    // Arreglos
    const aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    //Enumeraciones
    let FuerzaHeroes;
    (function (FuerzaHeroes) {
        FuerzaHeroes[FuerzaHeroes["Acuaman"] = 0] = "Acuaman";
        FuerzaHeroes[FuerzaHeroes["Batman"] = 1] = "Batman";
        FuerzaHeroes[FuerzaHeroes["Flash"] = 5] = "Flash";
        FuerzaHeroes[FuerzaHeroes["Superman"] = 100] = "Superman";
    })(FuerzaHeroes || (FuerzaHeroes = {}));
    const fuerzaFlash = FuerzaHeroes.Flash;
    const fuerzaSuperman = FuerzaHeroes.Superman;
    const fuerzaBatman = FuerzaHeroes.Batman;
    const fuerzaAcuaman = FuerzaHeroes.Acuaman;
    console.log(FuerzaHeroes);
    // Retorno de funciones
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    pedir_ayuda();
    activar_batiseñal();
    // Aserciones de Tipo
    const poder = '100';
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
    poder;
    console.log(poder);
})();
