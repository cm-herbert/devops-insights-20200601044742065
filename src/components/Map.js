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
			
<<<<<<< HEAD
		});
=======
		});
		this.map.setBounds([
		[-49.629214, 163.175812],
		[-31.719875,-178.630829]]);
		this.map.setCenter([
		-40.815517, 174.392590]);
		this.map.resize();
>>>>>>> 0b4e35ef9110dc52bde400048406fac8503ef53f
 	}
 	componentWillUnmount() {
    this.map.remove();
  }

	componentDidUpdate(prevProps, prevState, snapshot){
<<<<<<< HEAD
		this.map.resize();
=======
		
>>>>>>> 0b4e35ef9110dc52bde400048406fac8503ef53f
	}

	
    render(){
    	this.map.resize();
        return <div id="map" ref={el => this.mapContainer = el}/>;
	}

}
  
export default Map