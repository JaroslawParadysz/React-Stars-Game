import React from 'react';
import Hello, {fun} from './Hello2';

const ExportedComponent = () => {
    console.log('hello from exported module!');
    console.log(Hello);
    fun();
    return (
        <div>
            <span>Hello from exported component with button</span>
            <button>My button</button>
        </div>
    );
}

export default ExportedComponent;