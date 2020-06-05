import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'antd';
import { actionCreators } from './store';
import './index.less';

class Teacher extends PureComponent{
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render(){
    const {
      logo,
      teacher1
     } = this.props
    return (
      <div className="teacherBox">
        <div className="worldMap" />
        <div className="teacherIntroduce">
          <Row>
            <Col span={6} />
            <Col span={12}>
              <div className="logo">
                <img src={logo} alt=""/>
              </div>
              <p className="headText">
                我们的外教
              </p>
              <p className="headContent">
              Curly English 的外教都是热爱英语教学的专业教育工作者。我们的外教会让每一堂课都充满激情和正能量，他们会全心专注于您的孩子的课堂表现，并根据孩子的具体需求定制每一堂课
              </p>
            </Col>
            <Col span={6} />
          </Row>
        </div>
        <div className="teacherIntroduce2">
          <Row>
            <Col span={6} />
            <Col span={12}>
              <p className="headText">
                外教简介
              </p>
              <p className="headContent">
                我们 Curly English 平台的外教，100% 是以英语为母语的人士，并且全部都是使用 Curly English 教学大纲授课的专家。很多外教均持有顶级美国、英国和加拿大大学的毕业证书。我们一直对我们所拥有的外教感到自豪，我们相信您也会有相同感受！
              </p>
            </Col>
            <Col span={6} />
          </Row>
        </div>
        <div className="teacherInformationBox">
          <Row>
            <Col span={6} />
            <Col span={12}>
              <div className="teacherSBox">
                <Row>
                  <Col span={2} />
                  <Col span={6}>
                    <img src={teacher1} alt=""/>
                  </Col>
                  <Col span={2} />
                  <Col span={12}>
                    <div className="textIn">
                      <p className="Name">Dusan.</p>
                      <p className="country">英国</p>
                      <p className="information">Huddersfield大学商务研究生，编剧出身，写过两部剧本，文笔优秀，适合Esl老师,持TEFl证书，Totour ABC经验两年，线下在我机构担任教学老师</p>
                    </div>
                  </Col>
                  <Col span={2} />
                </Row>
              </div>
            </Col>
            <Col span={6} />
          </Row>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  teacher1: state.getIn(['teacher', 'teacher1']),
});

const mapDispatchToProps = (dispatch) => {
  return {
    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Teacher);