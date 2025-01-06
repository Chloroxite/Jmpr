//just a file full of useful bits and bobs that aren't built into javascript by default.
const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay)); //why doesn't js have a wait function by default...

//write the text out like in those hacking movies.
async function writeText(string){
    let charArray = string.split("");
    isOutputting = true;
    for (char of charArray){
        stringBuffer += char;
        terminal.innerText = stringBuffer + "█";
        await sleep(10);
    }
    terminal.innerText = stringBuffer;
    isOutputting = false;

}

//have the text "glitch" onto the screen instead.
async function glitchText(string){
    isOutputting = true;
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    
    for (i = 0; i < string.length; i++){
        stringBuffer += string.charAt(i);
        let textBuff2 = "";
        for (j = i+1; j < string.length; j++){
            textBuff2 += chars.charAt(Math.floor(Math.random() * chars.length));
        }

        terminal.innerText = stringBuffer + textBuff2;
        await sleep(20);
    }
    isOutputting = false;
}

async function clearText(){
    stringBuffer = "";
}
