import React, { PropTypes } from 'react';
import { Checkbox, Icon } from 'antd';

class Record extends React.Component {
    constructor() {
        super();
    }

    onChange(e) {
        this.setState({
            checked: e.target.checked
        });
        if (e.target.checked) {
            this.props.onComplete(this.props.number);
        } else {
            this.props.onRecover(this.props.number)
        }
    }

    onClose() {
        this.props.onClose(this.props.number);
    }

    render() {
        return (
            <div className={this.props.checked?'reocrd disabled':'reocrd'}>
                <Checkbox defaultChecked={this.props.checked} onChange={this.onChange.bind(this)}>
                    {this.props.title}
                </Checkbox>
                <Icon type="close" onClick={this.onClose.bind(this)} className="record-close" />
            </div>
        )
    }
}

Record.propTypes = {
    onComplete: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
    onRecover: PropTypes.func.isRequired,
    checked: PropTypes.bool.isRequired,
    number: PropTypes.number.isRequired
}

export default Record;