"use strict";
(() => {
    let AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 1] = "min";
        AudioLevel[AudioLevel["medium"] = 5] = "medium";
        AudioLevel[AudioLevel["medium2"] = 6] = "medium2";
        AudioLevel[AudioLevel["max"] = 10] = "max";
    })(AudioLevel || (AudioLevel = {}));
    let currentAudio = AudioLevel.max;
    console.log(AudioLevel.min);
    console.log(AudioLevel.medium);
    console.log(AudioLevel.medium2);
    console.log(AudioLevel.max);
    const AudioMax = 100;
    console.log(AudioMax - ((AudioLevel.min + AudioLevel.medium + AudioLevel.max) / 2));
})();
