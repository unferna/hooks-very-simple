import React, { useState } from 'react';
import Seconds from './Seconds';

const showAlert = run => {
    if(run) {
        return (
            <div className="alert alert-success">
                Running! <Seconds /> seconds
            </div>
        );
    }

    return (
        <div className="alert alert-danger">Stopped!</div>    
    );
};

const App = () => {
    /**
     * useState => returns state/function that can modify that property in the state
     */
    // Array destructuring
    const [ showTimer, setShowTimer ] = useState(false);
    return (
        <div className="app">
            <h1>Learn hooks</h1>
            <button onClick={ () => setShowTimer( !showTimer ) }>
                { !showTimer ? "Start Stopwatch" : "Stop Stopwatch"}
            </button>

            { showAlert( showTimer ) }
        </div>
    );
};

export default App;