import React from 'react';
import { Layout, Menu, Icon, Input, Button, message } from 'antd';
// import Record from '../components/Record';
import ToDoList from './TodoList';
import { connect } from 'react-redux';
import { addTodo } from '../actions/index';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router'

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

class App extends React.Component {
	constructor () {
		super();
	}

	onAdd() {
		const value = this.input.refs.input.value;
		if (value) {
			this.props.addTodo(value);
		} else {
			message.error('请输入事项');
		}
	}

	render () {
		/*<Button className="button">搜索</Button>*/
		
		const type = this.props.location.query.type;
		const todos = this.props.todos;

		const all = this.props.todos.length;
		const done = this.props.todos.filter((value=>value.completed)).length;

		return  (
		<Layout className="container">
			<Header className="header">
				<div className="logo">我的备忘录</div>
				<Input ref={ref => this.input = ref} onPressEnter={this.onAdd.bind(this)} className="input" placeholder="新建事项" size="large" />
				<Button onClick={this.onAdd.bind(this)} className="button" type="primary">添加</Button>
			</Header>
			<Content>
				<Layout>
					<Sider width={200}>
						<Menu
							mode="inline"
							defaultSelectedKeys={[type ? type: '1']}
							defaultOpenKeys={['sub1']}
							theme="dark" >
							<SubMenu key="sub1" title={<span><Icon type="user" />分类选择</span>}>
								<Menu.Item key="1"><Link to="/">全部 ({all})</Link></Menu.Item>
								<Menu.Item key="doing"><Link to="/?type=doing">正在进行 ({all-done})</Link></Menu.Item>
								<Menu.Item key="done"><Link to="/?type=done">已完成 ({done})</Link></Menu.Item>
							</SubMenu>
						</Menu>
					</Sider>
					<Content className="content">
						{this.props.children}
					</Content>
				</Layout>
			</Content>
			<Footer style={{ textAlign: 'center' }}>
				©2017 Created by wsw
			</Footer>
		</Layout>);
	}
}

const mapStateToProps = (state) => {
	return {
		todos: state.todos
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		addTodo: bindActionCreators(addTodo, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);