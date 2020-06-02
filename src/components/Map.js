/*eslint-env es_modules */
import React from 'react';

class Map extends React.Component {

	constructor(){
		super();
		
		
	}
	
	 componentDidMount() {
	 	window.mapboxgl.accessToken = 'pk.eyJ1IjoiY21oZXJiZXJ0IiwiYSI6ImNrYXg0bWtnbDAzYnYydG9hbGw1bjB6YXEifQ.rr8uQMKKbsbu6DX6icqcvQ';
	 	this.map = new window.mapboxgl.Map({
			container: this.mapContainer,
			style: 'mapbox://styles/mapbox/streets-v11',
			
		});
 	}
 	componentWillUnmount() {
    this.map.remove();
  }

	componentDidUpdate(prevProps, prevState, snapshot){
		this.map.resize();
	}

	
    render(){
    	this.map.resize();
        return <div id="map" ref={el => this.mapContainer = el}/>;
	}

}
  
export default Map