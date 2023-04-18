type Avenger = {
name: string,
    weapon: string
}

const ironman:Avenger = {
    name: 'IronMan',
    weapon: 'Traje'
}
const captainAmerica: Avenger = {
    name: 'Capitan America',
    weapon: 'Escudo'
}
const thor: Avenger = {
    name: 'Thor',
    weapon: 'Martillo'
}

const avengers:Avenger[] = [ironman, captainAmerica, thor];

for (const avenger of avengers) {
    console.log(avenger.name, avenger.weapon);
}