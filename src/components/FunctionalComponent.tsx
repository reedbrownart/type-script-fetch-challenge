import React from 'react';

const FunctionalComponent = (props) => {
    const { temperature } = props;
    return (
        <div className="App">
            <h1>Functional Component</h1>
            <h5>Temperature: {temperature}</h5>
        </div>
    );
}

export default FunctionalComponent;