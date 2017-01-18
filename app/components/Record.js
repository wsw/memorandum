import React from 'react';
import { Checkbox, Icon } from 'antd';

export default class Record extends React.Component {
    constructor() {
        super();

        this.state={
            checked: false
        }
    }

    onChange(e) {
        this.setState({
            checked: e.target.checked
        });
        //this.props.onCheckboxChange();
    }

    render() {
        return (
            <div className={this.state.checked?'reocrd disabled':'reocrd'}>
                <Checkbox checked={this.state.checked} onChange={this.onChange.bind(this)}>{this.props.title}</Checkbox>
                <Icon type="close" className="record-close" />
            </div>
        )
    }
}