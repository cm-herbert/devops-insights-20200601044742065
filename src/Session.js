 class Session{

    constructor(){
        this.locations = new Array();
        this.locations_nameonly = new Array();
        this.acToggled = false;
        this.validation = undefined;
        this.map = undefined;
    }

    addLocation(name, method, coords){
        //Only add locations once
        if(!this.locations_nameonly.includes(name)){
            if(method == 's'){
                this.map.addMarkerCoord(new window.mapboxgl.LngLat(coords.lon, coords.lat));
            }
            this.locations.push(new Entry(name, method));
            this.locations_nameonly.push(name);
        }
    }

}

class Entry{
    constructor(key,value){
        this.key = key;
        this.value = value;
    }
}

export default Session;