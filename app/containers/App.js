import React from 'react';
import { Layout, Menu, Icon, Input, Button } from 'antd';

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

class App extends React.Component {
	constructor () {
		super();
	}

	render () {
		return  <Layout className="container">
		    <Header className="header">
				<div className="logo">我的备忘录</div>
				<Input className="input" placeholder="新建事项" size="large" />
				<Button className="button" type="primary">添加</Button>
    			<Button className="button">搜索</Button>
		    </Header>
		    <Content>
				<Layout>
					<Sider width={200}>
						<Menu
							mode="inline"
							defaultSelectedKeys={['1']}
							defaultOpenKeys={['sub1']}
							theme="dark"
						>
					    <SubMenu key="sub1" title={<span><Icon type="user" />全部</span>}>
					      <Menu.Item key="1">新建事项</Menu.Item>
					      <Menu.Item key="2">正在进行</Menu.Item>
					      <Menu.Item key="3">已完成</Menu.Item>
					    </SubMenu>
					    </Menu>
					</Sider>
			        <Content className="content">
			          	Content
			        </Content>
			    </Layout>
		    </Content>
		    <Footer style={{ textAlign: 'center' }}>
		      ©2017 Created by wsw
		    </Footer>
		</Layout>;
	}
}

export default App;