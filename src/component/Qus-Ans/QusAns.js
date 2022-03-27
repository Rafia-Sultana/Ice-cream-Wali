import React from 'react';
import './QusAns.css'
const QusAns = () => {
    return (
        <div className='qusStyle'>
            <h3>How useState works?</h3>
            <p>Ans: useState is a Hook that contains a state variable and function. Value of state variable may vary.It should import from react before using.It represents condition of components that showed in react dom.In a single component,we can use multiple usestate.</p>
            <br />
            <h3>Props vs state</h3>
            <p>Ans: Props is a short form of properties. Props cant be changed.We receive props from parameter.We use props to send data one componenet to other component.
                State can be changed and represents current condition of component to react dom.
            </p>
        </div>
    );
};

export default QusAns;