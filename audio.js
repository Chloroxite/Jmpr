//This code handles audio assets. There be sounds.

class AudioSys {
    constructor() {
        //begin loading audio assets (stored in sounds and music folders respectively)
        audioContext;
        offlineContext = new OfflineAudioContext(2, 44100 * 40, 44100);

    }

    async loadSounds() {
        let soundlist = await fetch("./sounds/sounds.json");
        let audiobuffers = [];

        for (sound in soundlist.sounds) {
            fetch(sound)
                .then((response) => response.arrayBuffer())
                .then((loadedBuffer) => audiocontext.decodeAudioData(loadedBuffer))
                .then((decodedBuffer) => {

                });
        }
    }
}

