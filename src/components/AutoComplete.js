/*eslint-env es_modules */
import React, { useState } from 'react';
import AppContainer from '../containers/AppContainer';

//Dynamically generated component giving the user a drop down suggestion menu
class AutoComplete extends React.Component {
	//https://react.tips/how-to-create-reactjs-components-dynamically/
	constructor(props){
		super();
        this.props = props;
        global.session.validate = props.onItemSelected;
	}
	
	createItem(text){
        return <span className="ac_item" key={"acitm_"+text.key}>
            <span className="ac_icon">{text.value == 'm' ? '📌' : '🔎'}</span>
        <span className="ac_text"  onMouseDown={(event) => {
            global.session.validate(text.key);
            document.getElementById("usr").value = text.key;}}
        >{text.key}</span></span>;
    }

    createItems(items){
        return items.map(this.createItem);
    }

    handleClick(event){
        this.props.validate(event.target.text);
    }
 	
 	componentWillUnmount() {
    	
  	}


	
    render(){
        return <div className="ac_list">
            {this.createItems(global.session.locations)}
        </div>;
	}

}
  
export default AutoComplete