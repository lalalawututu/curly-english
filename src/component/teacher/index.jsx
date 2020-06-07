import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Row, Col, Carousel } from 'antd';
import { LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons';
import './index.less';

class Teacher extends PureComponent{
  constructor(props) {
    super(props);
    this.state = {
    }
    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);
  }

  next() {
    this.slider.slick.slickNext();
  }
  prev() {
    this.slider.slick.slickPrev();
  }

  render(){
    const {
      logo,
      teacher1,
      teacher2,
      teacher3,
      teacher4,
      scrollWidth
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
          {
            scrollWidth >= 1300 ?
            <div>
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
              <Row>
                <Col span={6} />
                <Col span={12}>
                  <div className="teacherSBox">
                    <Row>
                      <Col span={2} />
                      <Col span={6}>
                        <img src={teacher2} alt=""/>
                      </Col>
                      <Col span={2} />
                      <Col span={12}>
                        <div className="textIn">
                          <p className="Name">Catherine.</p>
                          <p className="country">美国</p>
                          <p className="information">编剧专业，艺术表演专业，多年幼儿园教学经验，适合低龄段学员，持Tefl证书</p>
                        </div>
                      </Col>
                      <Col span={2} />
                    </Row>
                  </div>
                </Col>
                <Col span={6} />
              </Row>
              <Row>
                <Col span={6} />
                <Col span={12}>
                  <div className="teacherSBox">
                    <Row>
                      <Col span={2} />
                      <Col span={6}>
                        <img src={teacher3} alt=""/>
                      </Col>
                      <Col span={2} />
                      <Col span={12}>
                        <div className="textIn">
                          <p className="Name">Lee.</p>
                          <p className="country">英国</p>
                          <p className="information">曼城大学英语文学专业，了解中国文化，TESOL国际认证教师，多年培训机构及幼儿园一线工作经验</p>
                        </div>
                      </Col>
                      <Col span={2} />
                    </Row>
                  </div>
                </Col>
                <Col span={6} />
              </Row>
              <Row>
                <Col span={6} />
                <Col span={12}>
                  <div className="teacherSBox">
                    <Row>
                      <Col span={2} />
                      <Col span={6}>
                        <img src={teacher4} alt=""/>
                      </Col>
                      <Col span={2} />
                      <Col span={12}>
                        <div className="textIn">
                          <p className="Name">Abdul.</p>
                          <p className="country">英国</p>
                          <p className="information">Huddersfield大学旅游管理专业，旅行多个国家，喜爱并研究世界各民族文化</p>
                        </div>
                      </Col>
                      <Col span={2} />
                    </Row>
                  </div>
                </Col>
                <Col span={6} />
              </Row>
            </div>
          :
            <div className="teacherSBoxMobile">
              <Row>
                <Col span={2} />
                <Col span={20} style={{background: 'white', borderRadius: '0.1rem'}}>
                  <Carousel dots lazyLoad dotsClass="" ref={el => (this.slider = el)}>
                    <div key={1}>
                      <img src={teacher1} alt=""/>
                      <div className="textIn">
                        <p className="Name">Dusan.</p>
                        <p className="country">英国</p>
                        <p className="information"> &emsp; &emsp;Huddersfield大学商务研究生，编剧出身，写过两部剧本，文笔优秀，适合Esl老师,持TEFl证书，Totour ABC经验两年，线下在我机构担任教学老师</p>
                      </div>
                    </div>
                    <div key={2}>
                      <img src={teacher2} alt=""/>
                      <div className="textIn">
                        <p className="Name">Catherine.</p>
                        <p className="country">美国</p>
                        <p className="information"> &emsp; &emsp;编剧专业，艺术表演专业，多年幼儿园教学经验，适合低龄段学员，持Tefl证书</p>
                      </div>
                    </div>
                    <div key={3}>
                      <img src={teacher3} alt=""/>
                      <div className="textIn">
                        <p className="Name">Lee.</p>
                        <p className="country">英国</p>
                        <p className="information"> &emsp; &emsp;曼城大学英语文学专业，了解中国文化，TESOL国际认证教师，多年培训机构及幼儿园一线工作经验</p>
                      </div>
                    </div>
                    <div key={4}>
                      <img src={teacher4} alt=""/>
                      <div className="textIn">
                        <p className="Name">Abdul.</p>
                        <p className="country">英国</p>
                        <p className="information"> &emsp; &emsp;Huddersfield大学旅游管理专业，旅行多个国家，喜爱并研究世界各民族文化</p>
                      </div>
                    </div>
                  </Carousel>
                  <LeftCircleOutlined onClick={this.prev} style={{position: 'absolute', top: '45%', left: '0.1rem', fontSize: '0.7rem', color: '#75c25a'}}/>
                  <RightCircleOutlined  onClick={this.next} style={{position: 'absolute', top: '45%', right: '0.1rem', fontSize: '0.7rem', color: '#75c25a'}}/>
                </Col>
                <Col span={2} />
              </Row>
            </div>
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  logo: state.getIn(['header', 'logo']),
  teacher1: state.getIn(['teacher', 'teacher1']),
  teacher2: state.getIn(['teacher', 'teacher2']),
  teacher3: state.getIn(['teacher', 'teacher3']),
  teacher4: state.getIn(['teacher', 'teacher4']),
  scrollWidth: state.getIn(['home', 'scrollWidth']),
});

const mapDispatchToProps = (dispatch) => {
  return {
    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Teacher);