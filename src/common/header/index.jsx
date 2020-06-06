import React, { PureComponent } from 'react';
import { Menu, Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { actionCreatorsHeader } from './store';
import { BankFilled, TeamOutlined, NotificationFilled } from '@ant-design/icons';
import './index.less';

class Header extends PureComponent{
  constructor(props) {
    super(props);
    this.state = {
      left: 0,
      current: 'homePage',
    }
  }

  componentDidMount() {
    let that = this;
    window.onscroll = function () {
      let sl = -Math.max(document.body.scrollLeft, document.documentElement.scrollLeft);
      let left = (sl) + 'px';
      that.setState({
        left: left
      });
    }
  }

  handleClick = e => {
    this.setState({
      current: e.key,
    });
  }

  render(){
    const {
      headPicture,
    } = this.props;
    return (
      <div className="headerBox" style={{left: this.state.left}}>
        <Row>
          <Col span={1} ></Col>
          <Col span={2}>
            <Link className="logolink" to="/">
              <img className="logoPic" src={headPicture} alt="" />
            </Link>
          </Col>
          <Col span={1} ></Col>
          <Col span={1} ></Col>
          <Col span={12} gutter={12}>
            <Menu className="menuBox" onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
              <Menu.Item key="homePage" icon={<BankFilled />}>
                <Link className="logolink" to="/" style={{ display: 'inherit' }}>
                  首页
                </Link>
              </Menu.Item>
              <Menu.Item key="teacherPage" icon={<TeamOutlined />}>
                <Link className="logolink" to="/teacher" style={{ display: 'inherit' }}>
                  教师信息
                </Link>
              </Menu.Item>
              <Menu.Item key="cooperationPage" icon={<NotificationFilled />}>
                商家合作
              </Menu.Item>
            </Menu>
          </Col>
          <Col span={7}></Col>
        </Row>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  headPicture: state.getIn(['header', 'headPicture']),
});

const mapDispatchToProps = (dispatch) => {
  return {
    handlePicture() {
      dispatch(actionCreatorsHeader.toggleLogo());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);