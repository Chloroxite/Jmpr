//Storing this unicode character here for later use: █ ©
//This code makes the game function. There be spoilers...


let terminal = document.getElementById("terminal");
let bufferedInput = false; //Flag to let the display code know that there is input buffered
let isOutputting = false; //Flag for whether or not the display is actively being updated
let playerControl = true; //Flag for player control, seperate from isOutputting
let userInput = ""; //Track user input
let stringBuffer = ""; //track entire screen buffer
let historyBuffer = [];
let hIndex = -1;
let player = new Player(16, "test");
let manpages = {
    "help":
        "Available commands:"
        + "\ncd"
        + "\nls"
        + "\ncat"
};//Still just storing this here for now

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

//I'm definitely gonna need to fix this function once i'm ready to re-enable it.
async function terminalBoot() {
    let tempBuff = "";
    playerControl = false;

    //Begin "boot" sequence
    await writeText("Checking CPU...", terminal);
    await sleep(1000);
    await writeText("Ok!", terminal);
    await writeText("\nChecking RAM...", terminal);
    await sleep(1000);
    await writeText("Ok!", terminal);
    await writeText("\nBIOS checksum verification...", terminal);
    await sleep(1000);
    await writeText("Ok!", terminal);
    await writeText("\nLoading kernel...", terminal);

    await sleep(5000);

    tempBuff =
        "\n\nCinux OS"
        + "\nCinux Corporation ©3521"
        + "\nKernel version 5.27.01"
        + "\nSYS_ERROR: Filesystem corruption detected! Attempting repairs. This may take some time...";

    await writeText(tempBuff, terminal);

    await sleep(1000);

    await glitchText("\n\nOur judgement day came a long time ago...", terminal);

    await sleep(2000);

    await glitchText("\nNow we live enslaved to our own creations...", terminal);

    await sleep(2000);

    await glitchText("\nBecome our retribution, our justice. Become...", terminal);

    await sleep(2000);

    await glitchText("\nJmpyr", terminal);

    await sleep(1000);

    await writeText("\nCorruption repaired. Entering userspace...", terminal);

    await sleep(3000);
    clearText(terminal);

    tempBuff =
        "\nWelcome to Cinux, new user!"
        + "\nEnter your user name:";

    await writeText(tempBuff, terminal);
    playerControl = true;

    gameLoop(); //enter game loop
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
