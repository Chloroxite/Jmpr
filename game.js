//Storing this unicode character here for later use: █ ©
//This code makes the game function. There be spoilers...

let player = new Player(16, "PersonMcDavid");
let worldState = new StateData(player);
let displayState = new DisplayData(worldState);
let textWriter = new TextWriter();
let uiBox = new UserInputBox();
let playerControl = true; //Flag for player control
let hIndex = -1;
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
                parseCommand(worldState.userInput);
                if (hIndex == -1) //make sure we don't push a previously entered and unaltered command onto the buffer.
                    worldState.inputHistory.push(worldState.userInput); //shove the user input buffer into the history buffer.
                displayState.outputHistory.push("\n>" + worldState.userInput); //and into the output buffer too, for displaying
                hIndex = -1; //set history index to -1
                worldState.userInput = ""; //blank the input buffer.
                break;
            case "Backspace":
                if (worldState.userInput.length != 0)
                    worldState.userInput = worldState.userInput.slice(0, -1);
                hIndex = -1; //reset history index
                break;
            case "ArrowUp":
                if (hIndex < worldState.inputHistory.length) {
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
                hIndex = -1; //reset history index
        }
    }
}

async function gameLoop() {
    while (!quit) {
        if (worldState.cmdSuccessful == true) //if the player has made a move, cycle the simulation once.
            worldState.tickSim();
        displayState.buildFrame();
        await sleep(16);
    }
}

//Handle user input
document.addEventListener("keydown", onInput);
