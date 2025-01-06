//Storing this unicode character here for later use: █ ©
//This code makes the game function. There be spoilers...


//why is this not a standard function in javascript........
let userInput = ""; //Track user input
let terminal = document.getElementById("terminal");
let isOutputting = false;
let playerControl = true;
let stringBuffer = ""; //track entire screen buffer
let manpages = { "help": 
		"Available commands:"
		+"\ncd"
		+"\nls"
		+"\ncat"
};//Still just storing this here for now

let quit = false;

//Wait until the page is actually freaking loaded...
window.onload = function() {
	gameLoop(); //Remember to set this back to terminalBoot when it's ready
}

//user input handling
function onInput(ev){
    if(!isOutputting && playerControl){
        ev.preventDefault(); //prevent hotkeys
        switch(ev.key) {
        case "Enter": //submit userInput
            parseCommand(userInput);
            userInput = ""; //blank the input buffer.
            break;
        case "Backspace":
            if(stringBuffer[stringBuffer.length - 1] != ">"){
                userInput = userInput.slice(0, -1);
                stringBuffer = stringBuffer.slice(0, -1);
            }
            break;
        case "ArrowUp":
            break;
        case "ArrowDown":
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
        case "Escape":
            break;
        default:
            userInput += ev.key;
            stringBuffer += ev.key;
        }
        terminal.innerText = stringBuffer;
    }
}

//I'm definitely gonna need to fix this function once i'm ready to re-enable it.
async function terminalBoot(){
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
        +"\nCinux Corporation ©3521"
        +"\nKernel version 5.27.01"
        +"\nSYS_ERROR: Filesystem corruption detected! Attempting repairs. This may take some time...";

    await writeText(tempBuff, terminal);

    await sleep(1000);

    await glitchText("\n\nOur judgement day came a long time ago...", terminal);

    await sleep(2000);

    await glitchText("\nNow we live enslaved to our own creations...", terminal);

    await sleep(2000);

    await glitchText("\nBecome our retribution, our justice. Become...", terminal);

    await sleep(2000);

    await glitchText("\nJmpr", terminal);

    await sleep(1000);

    await writeText("\nCorruption repaired. Entering userspace...", terminal);
    
    await sleep(3000);
    clearText(terminal);

    tempBuff =
        "\nWelcome to Cinux, new user!"
        +"\nEnter your user name:";

    await writeText(tempBuff, terminal);
    playerControl = true;

    gameLoop(); //enter game loop
}

async function gameLoop(){
    stringBuffer = terminal.innerText + ">"; //a buffer for working with text.
    let tick = 0;
    let player = new Player(16);
    
    terminal.innerText = stringBuffer;
    while(!quit){
        tick++;
        if(!isOutputting){
            if(Math.floor(tick / 100) % 2 == 0)
                terminal.innerText = stringBuffer;
            else
                terminal.innerText = stringBuffer + "█";
        }
        await sleep(10);
    }
}

async function parseCommand(command){
    inputArray = command.split(" ");
    let first = inputArray.shift();
    for (i of inputArray){
        console.log(i);
    }
    switch(first){
        case "cd":
            //call cd
            break;
        case "ls":
            //call ls
            break;
        case "hijack":
            //call hijack
            break;
        case "wget":
            //call wget
            break;
        case "cat":
            //call cat
            break;
        case "clear":
            clearText();
            break;
        case "glitch":
            await glitchText("\nThis is meant to test glitch text effect weeeeeeeeeeeeeeeeeeee\n");
            break;
        default:
            await writeText("\n" + first + ": command not found" + "\n");
    }
    stringBuffer += ">";
}

//Handle user input
document.addEventListener("keydown", onInput);
