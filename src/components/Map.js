/*eslint-env es_modules */
import React from 'react';

class Map extends React.Component {

	constructor(){
		super();
		
		
	}
	
	 componentDidMount() {
	 	window.mapboxgl.accessToken = 'pk.eyJ1IjoiY21oZXJiZXJ0IiwiYSI6ImNrYXg0bWtnbDAzYnYydG9hbGw1bjB6YXEifQ.rr8uQMKKbsbu6DX6icqcvQ';
	 	window.map = new window.mapboxgl.Map({
			container: this.mapContainer,
			style: 'mapbox://styles/mapbox/streets-v11'
			
		});
		window.map.setMaxBounds([
		[ 163.175812, -49.629214],
		[-178.630829, -31.719875]]);
		window.map.setCenter([
		 174.392590, -40.815517]);
		window.map.resize();
 	}
 	
 	componentWillUnmount() {
    	window.map.remove();
  	}


	
    render(){
        return <div ref={el => this.mapContainer = el}/>;
	}

}
  
export default Map