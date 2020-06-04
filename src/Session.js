 //Defines a strutured storage area for variables
 class Session{

    constructor(){
        this.locations = new Array();
        this.locations_nameonly = new Array();
        this.acToggled = false;
        this.validation = undefined;
    }

    addLocation(name, method){
        //Only add locations once
        if(!this.locations_nameonly.includes(name)){
            this.locations.push(new Entry(name, method));
            this.locations_nameonly.push(name);
        }
    }

}

//KeyValue pair Tuple for Array
class Entry{
    constructor(key,value){
        this.key = key;
        this.value = value;
    }
}

export default Session;