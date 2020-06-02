import React, { useState } from 'react';

function City(props) {

    const [validationError, setValidationError] = useState(null);

    const validate = (event) => {
        const inputPattern = /^[(a-z)|(A-Z)|\s|-]*$/; //Match only letters and Spaces or hyphen (There is at least one city name with a hypen in NZ according to wikipedia)
        const valid = inputPattern.test(event.target.value);
        if (!valid) {
            setValidationError('* Input should only consit of letters, whitespaces and hypens');
            props.clearResponse();
        } else {
            setValidationError('');
            props.onCityChange(event.target.value);
        }
    };

    return (
        <div>
            <div className="row" style = {{marginRight: 0, marginLeft: 0}}>
                <div className="col-sm-8" style = {{flex: 'none !important', width: '100% !important'}}>
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
                                validate(event);
                            }
                        }}
                    ></input>   
                </div>
            </div>
            <div className="pl-3 row">
                <div className="text-danger small"> { validationError }</div>
            </div>
        </div>
    );
}

export default City