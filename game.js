//Storing this unicode character here for later use: █ ©
//This code makes the game function. There be spoilers...


let isOutputting = false; //Flag for whether or not the display is actively being updated
let playerControl = true; //Flag for player control, seperate from isOutputting
let hIndex = -1;
let quit = false;

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
                parseCommand(userInput);
                if (hIndex == -1) //make sure we don't push a previously entered and unaltered command onto the buffer.
                    historyBuffer.push(userInput); //shove the user input buffer into the history buffer.
                hIndex = -1; //set history index to -1
                userInput = ""; //blank the input buffer.
                break;
            case "Backspace":
                if (userInput.length != 0) {
                    userInput = userInput.slice(0, -1);
                    if (!isOutputting)
                        stringBuffer = stringBuffer.slice(0, -1);
                    else
                        bufferedInput = true;
                }
                hIndex = -1; //reset history index
                break;
            case "ArrowUp":
                if (hIndex < historyBuffer.length) {
                    hIndex++;
                    userInput = historyBuffer[hIndex];
                }
                break;
            case "ArrowDown":
                if (hIndex > 0) {
                    hIndex--;
                    userInput = historyBuffer[hIndex];
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
                userInput += ev.key;
                if (!isOutputting)
                    stringBuffer += ev.key;
                else
                    bufferedInput = true;
                hIndex = -1; //reset history index
        }
        if (!isOutputting)
            terminal.innerText = stringBuffer;
    }
}

async function gameLoop() {
    stringBuffer = terminal.innerText + ">"; //a buffer for working with text.
    let tick = 0;

    terminal.innerText = stringBuffer;
    while (!quit) {
        tick++;
        if (!isOutputting) {
            if (Math.floor(tick / 100) % 2 == 0)
                terminal.innerText = stringBuffer;
            else
                terminal.innerText = stringBuffer + "█";
        }
        await sleep(10);
    }
}

//Handle user input
document.addEventListener("keydown", onInput);
