
(()=> {

enum AudioLevel {

    min = 1,
    medium = 5,
    medium2,
    max = 10

}

let currentAudio: AudioLevel = AudioLevel.max;

console.log(AudioLevel.min);
console.log(AudioLevel.medium);
console.log(AudioLevel.medium2);
console.log(AudioLevel.max);

const AudioMax = 100;
console.log(AudioMax - ((AudioLevel.min + AudioLevel.medium +AudioLevel.max)/ 2));

})()