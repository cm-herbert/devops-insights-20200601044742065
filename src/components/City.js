import React, { useState } from 'react';
import AutoComplete from './AutoComplete';

function useForceUpdate(){
    const [value, setValue] = useState(0); // integer state
    return () => setValue(value => ++value); // update the state to force render
}

function City(props) {

    const [validationError, setValidationError] = useState(null);

    const validate = (event) => {
        const inputPattern = /^[(a-z)|(A-Z)|\s|-]*$/; //Match only letters and Spaces or hyphen (There is at least one city name with a hypen in NZ according to wikipedia)
        const valid = inputPattern.test(event);
        if (!valid) {
            setValidationError('* Input should only consit of letters, whitespaces and hypens');
            props.clearResponse();
        } else {
            setValidationError('');
            props.onCityChange(event);
        }
    };

    const forceUpdate = useForceUpdate();
    const showSuggestion = (event) => {


    };

    const hideSuggestion = (event) => {

    };

    return (
        <div>
            <div id="usr_parent">
                    <style jsx="true">{`
                        .form-control::-webkit-input-placeholder {
                            color: #ddd;
                        }
                    `}
                    </style>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="usr" 
                        placeholder="City / Town Name"
                        onKeyPress={(event) => {
                            if (event.key === "Enter") {
                                validate(event.target.value);
                                global.session.acToggled = false;
                                forceUpdate();
                            }
                        }}
                        onFocus={(event) => {
                            //Show List
                            global.session.acToggled = true;
                            forceUpdate();
                        }}
                        onBlur={(event) => {
                            //Show List
                            console.log(event);
                            global.session.acToggled = false;
                            forceUpdate();
                        }}
                    ></input>   
                    </div>
            //Work with AutoComplete Suggestions - built from previous searches
            <div className="ac_container" style={{display: global.session.locations.length > 0 && global.session.acToggled ? 'block' :'none'}}>
                <AutoComplete onItemSelected={validate}/>
            </div>
            <div className="pl-3 row">
                <div className="text-danger small"> { validationError }</div>
            </div>
        </div>
    );
}

export default City