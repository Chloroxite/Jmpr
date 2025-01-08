class Player{
    constructor(memory, name){
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
        this.fileSystem = {
            "testDir":{},
            ".config":{}
        };
    }

    get memory() {
        return {
            max: this.max,
            unleaked: this.unleaked,
            free: this.free
        }
    }

    invSlot(slot){ return inv[slot]; }
}

class Host{
    //constructor(programs, 
}
