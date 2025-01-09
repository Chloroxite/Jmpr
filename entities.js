class Player{
    #max = 0;
    #unleaked = 0;
    #free = 0;
    #currentHost = "";
    #playerName = "";
    #cwd = "";
    #inv = null;
    #reach = 0;
    #status = "";
    #permissionLevel = 0;
    #fileSystem = {};

    constructor(memory, name){
        this.#max = memory; //Hard cap
        this.#unleaked = memory; //Soft cap
        this.#free = memory; //Current memory (these values will act as health)
        this.#currentHost = "home"; //What computer are they in?
        this.#playerName = name; //What is their username?
        this.#cwd = "/"; //Where in the computer are they?
        this.#inv = new Array(500); //arbitrary inventory size, I don't currently intend for the inventory size to be limited in any real gameplay capacity.
        this.#reach = 1;
        this.#status = "none";
        this.#permissionLevel = 1;
        this.#fileSystem = {
            "testDir":{},
            ".config":{}
        };
    }

    get memory(){
        return {
            max: this.#max,
            unleaked: this.#unleaked,
            free: this.#free
        }
    }

    get stats(){ 
        return{
            inv: this.#inv,
            reach: this.#reach,
            permLvl: this.#permissionLevel = 1
        }
    }

    get host(){ return this.#currentHost; };
    get cwd(){ return this.#cwd; };


    invSlot(slot){ return inv[slot]; }
}

class fileTree{
    constructor(root){
        this.root = root;
        this.index = root;
    }
    
    get root(){ return this.root; };
    get index(){ return this.index; };
}

class file{
    constructor(name, type, permLevel){
        this.name = name;
        this.type = type;
        this.permLevel = permLevel;
        this.children = {};
        this.parent = null;
    }

    get name(){ return this.name; };
    get type(){ return this.type; };
    get permLevel(){ return this.permLevel; };
    get parent(){ return this.parent; };
    get children(){ return this.children; };
}

class Host{
    //constructor(programs, 
}
