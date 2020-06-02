/*eslint-env es_modules */
import React from 'react';
import AppContainer from '../containers/AppContainer';

class Map extends React.Component {

	constructor(props){
		super();
		this.map = undefined;
		this.markers = new Array();
		this.container = props.container;
		
	}
	
	 componentDidMount() {
	 	window.mapboxgl.accessToken = 'pk.eyJ1IjoiY21oZXJiZXJ0IiwiYSI6ImNrYXg0bWtnbDAzYnYydG9hbGw1bjB6YXEifQ.rr8uQMKKbsbu6DX6icqcvQ';
		this.map = new window.mapboxgl.Map({
			container: this.mapContainer,
			style: 'mapbox://styles/mapbox/streets-v11'
			
		});
		 /*window.map.setMaxBounds([
		[ 163.175812, -49.629214],
		[-178.630829, -31.719875]]);*/
		this.map.setZoom(4);
		this.map.setCenter([
		 174.392590, -40.815517]);
		this.map.resize();
		
		this.map.on('click', (event) => {
			this.addMarker(event.lngLat);
		});
	 }
	 
	async addMarker(location){
		if(await this.props.onHandleMarker(location) == true){
			var mark = new window.mapboxgl.Marker().setLngLat(location).addTo(this.map);
			this.markers.push(mark);
		}
		

	}
 	
 	componentWillUnmount() {
    	this.map.remove();
  	}


	
    render(){
        return <div ref={el => this.mapContainer = el}/>;
	}

}
  
export default Map