//This file will contain all the display handling code

//aggregates all the information needed to build the next frame, then builds it.
class StateData {
    constructor(player) {
        this.terminal = document.getElementById("terminal");
        this.outputHistory = [];
        this.bufferedInput = false;
        this.userInput = "";
        this.entList = [player];
        this.tick = 0;
        this.historyBuffer = [];
        this.frameBuffer = "";
    }


}

class TextWriter extends Entity {
    constructor(input) {
        super();
        this.input = input;
        this.output = "";
        this.index = 0;
        this.behaviors = [
            (stateData) => {
                if (index <= input.length()) {
                    this.output[index] = input[index];
                    this.output[index + 1] = "█";
                    index++;
                }
                else {
                    this.output.slice(0, -1);
                    stateData.outputHistory += this.output;
                }

            }];
    }

    set input(i) {
        this.input = i;
        index = 0;
    }
}

class GlitchWriter extends Entity {
    constructor(input) {
        super();
        this.input = input;
        this.output = "";
        this.behaviors = [];
    }
}
