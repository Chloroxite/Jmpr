//This file will contain all the display handling code

//aggregates all the information needed to build the next frame, then builds it.
class DisplayData {
    constructor(StateData) {
        this.stateData = StateData;
        this.terminal = document.getElementById("terminal");
        this.outputHistory = ["testing1", "\ntesting2"];
        this.frameBuffer = "";
        this.htmlBuffer = ""; //Seperated mostly for safety reasons. ONLY USE FOR UI WITH LIMITED USER INTERACTION!!
        this.entList = [];
    }

    //increment over all behaviors of all entities and build a frame
    buildFrame() {
        //build part of frame from outputHistory
        this.frameBuffer += this.outputHistory.join("");

        //then build the rest from behaviors
        for (let e in this.entList) {
            for (let b in this.entList[e].behaviors) {
                this.entList[e].behaviors[b](this);
            }
        }

        //add user's current input to the buffer
        //this.frameBuffer += "\n>" + this.statedata.userInput;

        //push the framebuffers into the display
        this.terminal.innerHTML = this.htmlBuffer; //If user-typed input has entered this buffer, you're doing something wrong.
        this.terminal.innerText = this.frameBuffer;
        this.frameBuffer = "";
        this.htmlBuffer = "";
    }
}

class UserInputBox extends Entity {
    constructor() {
        super();
        this.output = "";
        this.tick = 0;
        this.behaviors = [
            (displayData) => {
                if (displayData.outputHistory.length != 1)
                    this.output = "\n>" + displayData.stateData.userInput;
                else
                    this.output = ">" + displayData.stateData.userInput;
                if (this.tick <= 50)
                    this.output += "█";

                if (this.tick == 100)
                    this.tick = 0;

                displayData.frameBuffer += this.output;
                this.tick++;
            }
        ];
    }
}

class TextWriter extends Entity {
    constructor() {
        super();
        this.input = [];
        this.buffer = [''];
        this.output = "";
        this.index = 0;
        this.behaviors = [
            (displayData) => {
                if (this.input[0] != undefined && this.index < this.input[0].length) {
                    this.buffer[this.index] = this.input[0][this.index];
                    this.buffer[this.index + 1] = "█";
                    this.output = this.buffer.join("");
                    displayData.frameBuffer += this.output;
                    this.index++;
                    if (this.index == this.input[0].length) {
                        this.input.shift();
                        displayData.outputHistory.push(this.output.slice(0, -1));
                        this.output = "";
                        this.buffer = [''];
                        if (this.input[0] != "")
                            this.index = 0;
                    }
                }

            }];
    }

    setInput(i) {
        this.input.push(i);
    }
}

class GlitchWriter extends Entity {
    constructor(input = "") {
        super();
        this.input = input;
        this.output = "";
        this.behaviors = [];
    }
}
