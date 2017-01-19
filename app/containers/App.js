import React from 'react';
import { Layout, Menu, Icon, Input, Button } from 'antd';
import Record from '../components/Record';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { addTodo, completeTodo, deleteTodo, recoverTodo} from '../actions/index';

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
			alert('请输入事项');
		}
	}

	render () {
		console.log(this.props);
		const records = this.props.todos.map((value, index) => {
			return <Record 
					key={index} 
					index={index} 
					checked={value.completed}
					title={value.text} 
					onComplete={this.props.completeTodo}
					onRecover={this.props.recoverTodo}
					onClose={this.props.deleteTodo}
					completed={value.completed}>
				</Record>	
		});
		/*<Button className="button">搜索</Button>*/
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
							defaultSelectedKeys={['1']}
							defaultOpenKeys={['sub1']}
							theme="dark" >
							<SubMenu key="sub1" title={<span><Icon type="user" />分类选择</span>}>
								<Menu.Item key="1">全部</Menu.Item>
								<Menu.Item key="2">正在进行</Menu.Item>
								<Menu.Item key="3">已完成</Menu.Item>
							</SubMenu>
						</Menu>
					</Sider>
					<Content className="content">
						{ records }		
					</Content>
				</Layout>
			</Content>
			<Footer style={{ textAlign: 'center' }}>
				©2017 Created by wsw
			</Footer>
		</Layout>);
	}
}

function mapStateToProps(state) {
    return {todos: state.todos};
}
function mapDispatchToProps(dispatch) {
	return {
		addTodo: bindActionCreators(addTodo, dispatch),
		completeTodo: bindActionCreators(completeTodo, dispatch),
		deleteTodo: bindActionCreators(deleteTodo, dispatch),
		recoverTodo: bindActionCreators(recoverTodo, dispatch)
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(App);