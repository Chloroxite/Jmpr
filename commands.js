//This file will hold most of the functions representing the usable commands. Think of it like a move list.

async function parseCommand(command) {
    inputArray = command.split("");
    let inputs = [];
    let index = 0;
    inputs[index] = ""; //I love javascript...
    let inQuote = false; //Are we in a quotation?"
    let buffer = "";
    let first = "";

    for (i in inputArray) {
        if (inputArray[i] == "\"") {
            if (!inQuote)
                inQuote = true;
            else
                inQuote = false;
        }
        else if (inputArray[i] == " " && !inQuote) {
            index++;
            inputs[index] = "";
        }
        else
            inputs[index] += inputArray[i];
    }
    first = inputs.shift();

    switch (first) {
        case "cd":
            //call cd
            break;
        case "ls":
            await ls(inputs.shift());
            break;
        case "pwd":
            await writeText("\n" + player.cwd + "\n>");
            break;
        case "ls":
            //call ls
            break;
        case "hijack":
            //call hijack
            break;
        case "dl":
            //call download
            break;
        case "cat":
            //call cat
            break;
        case "echo":
            await writeText("\n" + inputs.shift() + "\n>");
            break;
        case "lostest":
            await writeText("\n" + await lineOfSight(inputs.shift(), inputs.shift(), inputs.shift()) + "\n>");
            break;
        case "fetch":
            //call fetch
            break;
        case "clear":
            clearText();
            break;
        case "glitch":
            await glitchText("\nThis is meant to test the glitch text effect weeeeeeeeeeeeeeeeeeee\n>");
            break;
        default:
            await writeText("\n" + first + ": command not found" + "\n>");
    }
}

async function cd(dir) {
    if (player.fileSystem.root != undefined) {

    }
}

async function ls(dir) {
    let isAbsolute = (dir[0] == "/");
    let fs = player.hostFS;
    let children = fs.index.children;
    let path = [];
    let diff = 0;
    path.push(...dir.split("/"));
    diff = Math.abs(path.length - player.cwd.split("/").length);

    if (isAbsolute) {

    }
    else {

    }
}
