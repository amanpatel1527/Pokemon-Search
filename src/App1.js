import React, { useState } from 'react'
import './App.css'
import './Components/Counter/Counter.css'
import Counter from './Components/Counter/Counter';



//  ===>3Phase
// 1.A=Component is create or component mounts
// 2.component updates
// 3.components is deleted or unmount

export default function App1() {

    const [showCounter, setCounter] = useState(false)
    return (
        <div className='app'>

            {showCounter && (<div>
                <Counter />
            </div>)}
            <div style={{ marginTop: 400 }}>
                <button onClick={() => setCounter(false)} >Mount </button>
                <button onClick={() => setCounter(true)} >Mount </button>
            </div>
        </div>
    );
}
