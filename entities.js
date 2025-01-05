export class Player{
    constructor(memory){
        this.max = memory; //Hard cap
        this.unleaked = memory; //Soft cap
        this.free = memory; //Current memory (these values will act as health)
        this.currentHost = "home"; //What computer are they in?
        this.cwd = "/home"; //Where in the computer are they?
        this.inv = new array(500); //arbitrary inventory size, I don't currently intend for the inventory size to be limited in any real gameplay capacity.
        this.reach = 1;
        this.status = "none";
        this.permissionLevel = 1;
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

export class Host{
    //constructor(programs, 
}
