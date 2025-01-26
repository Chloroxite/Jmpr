//Storing this unicode character here for later use: █ ©
//This code makes the game function. There be spoilers...

let player = new Player(16, "PersonMcDavid");
let worldState = new StateData(player);
let displayState = new DisplayData(worldState);
let textWriter = new TextWriter();
let uiBox = new UserInputBox();
let playerControl = true; //Flag for player control
let hIndex = 0;
let quit = false;

displayState.entList.push(textWriter);
displayState.entList.push(uiBox);

//Wait until the page is actually freaking loaded...
window.onload = function() {
    gameLoop(); //Remember to set this back to terminalBoot when it's ready
}

//user input handling
function onInput(ev) {
    if (playerControl) {
        ev.preventDefault(); //prevent hotkeys
        switch (ev.key) {
            case "Enter": //submit userInput
                displayState.outputHistory.push("\n>" + worldState.userInput); //shove userInput into output buffer, for displaying
                parseCommand(worldState.userInput);
                if (hIndex != 0)
                    worldState.inputHistory[0] = worldState.userInput;
                worldState.inputHistory.unshift("");
                hIndex = 0; //set history index to 0
                worldState.userInput = ""; //blank the input buffer.
                break;
            case "Backspace":
                if (worldState.userInput.length != 0) {
                    worldState.userInput = worldState.userInput.slice(0, -1);
                    worldState.inputHistory[0] = worldState.inputHistory[0].slice(0, -1);
                    hIndex = 0;
                }
                break;
            case "ArrowUp":
                if (hIndex < worldState.inputHistory.length - 1) {
                    hIndex++;
                    worldState.userInput = worldState.inputHistory[hIndex];
                }
                break;
            case "ArrowDown":
                if (hIndex > 0) {
                    hIndex--;
                    worldState.userInput = worldState.inputHistory[hIndex];
                }
                break;
            case "ArrowRight":
                break;
            case "ArrowLeft":
                break;
            case "Shift":
                break;
            case "Meta":
                break;
            case "Control":
                break;
            case "Alt":
                break;
            case "Tab":
                break;
            case "Escape":
                break;
            default:
                worldState.userInput += ev.key;
                worldState.inputHistory[0] = worldState.userInput;
                hIndex = 0;
        }
    }
}

async function gameLoop() {
    //remove this after we get done testing it.



    while (!quit) {
        if (worldState.cmdSuccessful == true) //if the player has made a move, cycle the simulation once.
            worldState.tickSim();
        displayState.buildFrame();
        await sleep(16);
    }
}

//Handle user input
document.addEventListener("keydown", onInput);
