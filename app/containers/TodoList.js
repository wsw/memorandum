import Record from '../components/Record';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { completeTodo, deleteTodo, recoverTodo} from '../actions/index';

class TodoList extends Component {
    constructor() {
        super();
    }

    render() {
		console.log(this.props.location.query.type);
		const type = this.props.location.query.type;
		let todos;
		switch (type) {
			case 'doing':
				todos = this.props.todos.filter((value) => {
					return value.completed == false;
				});
				break;
			case 'done':
				todos = this.props.todos.filter((value) => {
					return value.completed;
				});
				break;
			default:
				todos = this.props.todos;
		}
		const records = todos.map((value, index) => {
			return <Record 
					key={value.number} 
					number={value.number} 
					checked={value.completed}
					title={value.text} 
					onComplete={this.props.completeTodo}
					onRecover={this.props.recoverTodo}
					onClose={this.props.deleteTodo}
					completed={value.completed}>
				</Record>	
		});
        return <div>{ records }</div>
    }
}

function mapStateToProps(state) {
    return {todos: state.todos};
}
function mapDispatchToProps(dispatch) {
	return {
		completeTodo: bindActionCreators(completeTodo, dispatch),
		deleteTodo: bindActionCreators(deleteTodo, dispatch),
		recoverTodo: bindActionCreators(recoverTodo, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);