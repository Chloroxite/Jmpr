class Player {
    #max;
    #unleaked;
    #free;
    #currentHost;
    #playerName;
    #cwd;
    #inv;
    #reach;
    #status;
    #permissionLevel;
    #fileSystem;
    #hostFS;

    constructor(memory, name) {
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
        this.#fileSystem = new objTree(new file("root", "dir", 1, null)); //stores the players filesystem.
        this.#fileSystem.index.pushChild(new file("testfile", "file", 1, this.#fileSystem.index));
        this.#fileSystem.index.pushChild(new file(".conf", "folder", 1, this.#fileSystem.index));
        this.#hostFS = this.#fileSystem; //Stores the host computer's filesystem.
    }

    get memory() {
        return {
            max: this.#max,
            unleaked: this.#unleaked,
            free: this.#free
        }
    }

    get stats() {
        return {
            inv: this.#inv,
            reach: this.#reach,
            permLvl: this.#permissionLevel = 1
        }
    }

    //getters
    get host() { return this.#currentHost; };
    get cwd() { return this.#cwd; };
    get fileSystem() { return this.#fileSystem; };
    get hostFS() { return this.#hostFS; };

    //setters
    set host(newHost) { return this.#currentHost = newHost; };
    set cwd(newDir) { return this.#cwd = newDir; };
    set fileSystem(newFS) { this.#fileSystem = newFS; };
    set hostFS(newFS) { this.#hostFS = newFS; };


    invSlot(slot) { return inv[slot]; }
}

class objTree {
    #root;
    #index;
    constructor(root) {
        this.#root = root;
        this.#index = root;
    }
    //Getters
    get root() { return this.#root; };
    get index() { return this.#index; };

    //Setters
    set root(r) { this.#root = r; };
    set index(i) { this.#index = i; };

    //methods

}

class file {
    #name;
    #type;
    #permLevel;
    #children;
    #parent;
    constructor(name, type, permLevel, parent) {
        this.#name = name;
        this.#type = type;
        this.#permLevel = permLevel;
        this.#children = [];
        this.#parent = parent;
    }

    //getters
    get name() { return this.#name; };
    get type() { return this.#type; };
    get permLevel() { return this.#permLevel; };
    get parent() { return this.#parent; };
    get children() { return this.#children; };

    //setters
    set name(n) { this.#name = n; };
    set type(t) { this.#type = t; };
    set permLevel(pl) { this.#permLevel = pl; };
    set parent(p) { this.#parent = p; };
    set children(c) { this.#children = c; };

    //method functions
    pushChild(child) {
        this.#children.push(child);
    }

    popChild() {
        return this.#children.pop();
    }

    shiftChild() {
        return this.#children.shift();
    }
}

class Host {
    //constructor(programs, 
}
