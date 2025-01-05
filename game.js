import("/entities.js");
//Storing this unicode character here for later use: █ ©
//This code makes the game function. There be spoilers...


//why is this not a standard function in javascript........
const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));
let userInput;
let isOutputting = false;
let playerControl = true;
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
    let terminal = document.getElementById("terminal");

    
}

async function terminalBoot(){
    let terminal = document.getElementById("terminal");
    let stringBuffer;
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

    stringBuffer = 
        "\n\nCinux OS"
        +"\nCinux Corporation ©3521"
        +"\nKernel version 5.27.01"
        +"\nSYS_ERROR: Filesystem corruption detected! Attempting repairs. This may take some time...";

    await writeText(stringBuffer, terminal);

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

    stringBuffer =
        "\nWelcome to Cinux, new user!"
        +"\nEnter your user name:";

    await writeText(stringBuffer, terminal);
    playerControl = true;

    gameLoop(); //enter game loop
}

async function gameLoop(){
    let terminal = document.getElementById("terminal");
    let textBuff = terminal.innerText + ">"; //a buffer for working with text.
    let tick = 0;
    
    terminal.innerText = textBuff;
    while(!quit){
        
        await sleep(10);
    }
}

//write the text out like in those hacking movies.
async function writeText(string, terminal){
    let textBuff = terminal.innerText;
    let charArray = string.split("");

    for (char of charArray){
        textBuff += char;
        terminal.innerText = textBuff + "█";
        await sleep(10);
    }
    terminal.innerText = textBuff;

}

//have the text "glitch" onto the screen instead.
async function glitchText(string, terminal){
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let textBuff = terminal.innerText;
    
    for (i = 0; i < string.length; i++){
        textBuff += string.charAt(i);
        let textBuff2 = "";
        for (j = i+1; j < string.length; j++){
            textBuff2 += chars.charAt(Math.floor(Math.random() * chars.length));
        }

        terminal.innerText = textBuff + textBuff2;
        await sleep(20);
    }
}

async function clearText(terminal){
    terminal.innerText = "";
}

//Handle user input
document.addEventListener("keydown", onInput);
