//This file contains all actual game entities (not including entities related to display)

class StateData {
    constructor(player) {
        this.inputHistory = [""];
        this.bufferedInput = false;
        this.userInput = "";
        this.entList = [player];
        this.cmdSuccessful = false; //Has the player entered a command that was successful?
    }

    //increment over all behaviors of all entities
    tickSim() {
        for (e in this.entList) {
            for (b in this.entList[e].behaviors) {
                this.entList[e].behaviors[b](this);
            }
        }
    }
}

class Entity {
    constructor() {
        this.behaviors = [];
    }
}

class Player extends Entity {
    constructor(memory, name) {
        super();
        this.max = memory; //Hard cap
        this.unleaked = memory; //Soft cap
        this.free = memory; //Current memory (these values will act as health)
        this.currentHost = "home"; //What computer are they in?
        this.playerName = name; //What is their username?
        this.cwd = "/"; //Where in the computer are they?
        this.inv = new Array(500); //arbitrary inventory size, I don't currently intend for the inventory size to be limited in any real gameplay capacity.
        this.reach = 1;
        this.status = "none";
        this.permissionLevel = 1;
        this.fileSystem = new objTree(new file("root", "dir", 1, null)); //stores the players filesystem.
        this.fileSystem.index.children.push(new file("testfile", "file", 1, this.fileSystem.index));
        this.fileSystem.index.children.push(new file(".conf", "folder", 1, this.fileSystem.index));
        this.hostFS = this.fileSystem; //Stores the host computer's filesystem.
    }
}

class objTree {
    constructor(root) {
        this.root = root;
        this.index = root;
    }
}

class file {
    constructor(name, type, permLevel, parent) {
        this.name = name;
        this.type = type;
        this.permLevel = permLevel;
        this.children = [];
        this.parent = parent;
    }

    //method functions
}

class Host {
    //constructor(programs, 
}
