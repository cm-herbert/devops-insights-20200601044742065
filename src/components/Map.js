/*eslint-env es_modules */
import React from 'react';
import AppContainer from '../containers/AppContainer';

class Map extends React.Component {

	constructor(props){
		super();
		this.map = undefined;				//Map
		this.container = props.container;	//Container
		this.supress_marker = false;		//Should map cancel marker placement - used when clicking on markers
		
		global.session.map = this;
		
		
	}
	
	 componentDidMount() {
	 	window.mapboxgl.accessToken = 'pk.eyJ1IjoiY21oZXJiZXJ0IiwiYSI6ImNrYXg0bWtnbDAzYnYydG9hbGw1bjB6YXEifQ.rr8uQMKKbsbu6DX6icqcvQ';
		this.map = new window.mapboxgl.Map({
			container: this.mapContainer,
			style: 'mapbox://styles/mapbox/satellite-streets-v11'
			
		});
		
		this.map.setZoom(4);
		this.map.setCenter([
		 174.392590, -40.815517]);
		this.map.resize();
		
		this.map.on('click', (event) => {
			//Stops another marker being placed after click event
			if(!this.supress_marker){
				console.log("Map: " + event);
				this.addMarker(event.lngLat);
			}
			else
				this.supress_marker = false;

		});
	
		
	 }
	 
	async addMarker(location){
		//Create Custom Marker using div so can capture click event
		if(await this.props.onHandleMarker(location) == true){
			var el=document.createElement('div');
			el.classList.add("map_marker");
			el.style.background = "dodgerblue";
			el.addEventListener('click', (event) => {this.supress_marker = true;
				this.props.onHandleMarker(location);});
			var mark = new window.mapboxgl.Marker(el).setLngLat(location).addTo(this.map);
		}
	}
	async addMarkerCoord(location){
		//Create Custom Marker using div so can capture click event
		var el=document.createElement('div');
			el.classList.add("map_marker");
			el.style.background = "lightcoral";
			el.addEventListener('click', (event) => {this.supress_marker = true;
				this.props.onHandleMarker(location);});
			var mark = new window.mapboxgl.Marker(el).setLngLat(location).addTo(this.map);
	}
 	
 	componentWillUnmount() {
    	this.map.remove();
  	}


	
    render(){
        return <div ref={el => this.mapContainer = el}/>;
	}

}
  
export default Map