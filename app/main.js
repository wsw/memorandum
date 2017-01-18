import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'antd';

class Hello extends React.Component {
    render() {
        return <Button>Hello</Button>;
    }
}

ReactDOM.render(<Hello></Hello>, 
	document.body.appendChild(document.createElement('div')));