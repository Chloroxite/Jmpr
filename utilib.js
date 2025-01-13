//just a file full of useful bits and bobs that aren't built into javascript by default.
const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay)); //why doesn't js have a wait function by default...

//Check whether two files have line of sight of each other. (Are in range, and have a direct path to each other)
async function lineOfSight(source, target, range) {
    let srcArray = source.split("/");
    let targArray = target.split("/");
    let srcLength = srcArray.length;
    let targLength = targArray.length;
    let diff = Math.abs(srcLength - targLength);

    //Is the target within range of the source
    if (diff <= range) {
        //Order matters. Which string is bigger?
        if (srcLength < targLength) {
            //await writeText("\ntargLength is bigger: " + source + " vs " + target.substring(0, source.length));
            if (source == target.substring(0, source.length))
                return true;
            else
                return false;
        }
        else {
            //await writeText("\nsrcLength is bigger or equal: " + target + " vs " + source.substring(0, target.length));
            if (target == source.substring(0, target.length))
                return true;
            else
                return false;
        }
    }
    //await writeText("\nrange test failed");
    return false;
}
