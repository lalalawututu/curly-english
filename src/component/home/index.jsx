import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Carousel } from 'antd';
import { SmileFilled } from '@ant-design/icons';
import { Row, Col } from 'antd';
import { actionCreators } from './store';
import './index.less';

class Home extends PureComponent{
  constructor(props) {
    super(props);
    this.state = {
      current: 'homePage',
    }
  }

  componentWillReceiveProps() {
    this.props.handleChangeScrollWidth(window.innerWidth)
  }

  componentDidMount() {
    let that = this;
    window.addEventListener('load', function() {
      that.props.handleChangeScrollWidth(window.innerWidth);
      
      window.addEventListener('resize', function() {
        that.props.handleChangeScrollWidth(window.innerWidth)
      })
    })
  }

  render(){
    const {
      carouselPic1,
      carouselPic2,
      carouselPic3,
      scrollWidth
    } = this.props
    return (
      <div className="homeBox">
        <div className="kong" />
        {
          scrollWidth >= 1400 ?
          <div className="PC">
            <Carousel autoplay autoplaySpeed={5000} dots={false} effect="fade" easing lazyLoad>
              <div>
                <img className={scrollWidth <= 1400 ? 'carouselPic' : ''} src={carouselPic1} alt=""/>
              </div>
              <div>
                <img className={scrollWidth <= 1400 ? 'carouselPic' : ''} src={carouselPic2} alt=""/>
              </div>
              <div>
                <img className={scrollWidth <= 1400 ? 'carouselPic' : ''} src={carouselPic3} alt=""/>
              </div>
            </Carousel>
          </div>
          :
          <div className="mobile">
            <Carousel autoplay autoplaySpeed={5000} dots={false} effect="fade" easing lazyLoad>
              <div>
                <img className={scrollWidth <= 1400 ? 'carouselPic' : ''} src={carouselPic1} alt=""/>
              </div>
              <div>
                <img className={scrollWidth <= 1400 ? 'carouselPic' : ''} src={carouselPic2} alt=""/>
              </div>
              <div>
                <img className={scrollWidth <= 1400 ? 'carouselPic' : ''} src={carouselPic3} alt=""/>
              </div>
            </Carousel>
          </div>
        }
        
        <div className="whyLearn">
          <div className="whyLearnHead">
            <SmileFilled style={{position: 'relative', top: '0.04rem', fontSize : '0.36rem', margin: '0.22rem 0.2rem 0 0', color: '#75c25a'}}/>
            <h2>为什么要让孩子来小卷毛学习英语</h2>
            <SmileFilled style={{position: 'relative', top: '0.04rem',  fontSize : '0.36rem', margin: '0.22rem 0 0 0.2rem', color: '#75c25a'}}/>
          </div>
          <div className="whyLearnIntroduce">“小卷毛”课程体系，是以正宗的美国课堂为蓝本，结合中国孩子的教育现状及特点，量身定制的最适合中国孩子学习的课程——国际公民课程。采用家庭化场景教学，课堂是日常的生活环境，比如客厅、公园、餐厅。外教不仅是授课老师，还是孩子的生活伙伴。</div>
        </div>
        {
          scrollWidth >= 1400 ?
          <div className="whyLearnContent">
            <Row>
              <Col span={4}></Col>
              <Col span={7}>
                <div className="whylearnPicBox">
                  <div className="whylearnPic1" />
                  <div className="whylearnPicText">
                    <p className="text1">
                      特色一：家庭环境全英语交流
                    </p>
                    <p className="text2">
                      外教不仅是授课老师，更是孩子的生活伙伴
                    </p>
                  </div>
                </div>
              </Col>
              <Col span={2}></Col>
              <Col span={7}>
                <div className="whylearnPicBox">
                  <div className="whylearnPic2" />
                  <div className="whylearnPicText">
                    <p className="text1">
                      特色二：全职外教上门授课
                    </p>
                    <p className="text2">
                    与其把时间浪费在交通上，不如稳坐家中学习
                    </p>
                  </div>
                </div>
              </Col>
              <Col span={4}></Col>
            </Row>
            <Row>
              <Col span={4}></Col>
              <Col span={7}>
                <div className="whylearnPicBox">
                  <div className="whylearnPic3" />
                  <div className="whylearnPicText">
                    <p className="text1">
                      特色三：社区熟人共享拼班
                    </p>
                    <p className="text2">
                      性价比高，比传统培训机构实惠多多
                    </p>
                  </div>
                </div>
              </Col>
              <Col span={2}></Col>
              <Col span={7}>
                <div className="whylearnPicBox">
                  <div className="whylearnPic4" />
                  <div className="whylearnPicText">
                    <p className="text1">
                      特色四：精准匹配教材
                    </p>
                    <p className="text3">
                      根据您的需求及兴趣智能匹配教材，量身定制，依据12个等级细分学习水平，精准提升
                    </p>
                  </div>
                </div>
              </Col>
              <Col span={4}></Col>
            </Row>
          </div>
          :
          <div className="whyLearnContent">
            <Row>
              <Col span={3}></Col>
              <Col span={18}>
                <div className="whylearnPicBox">
                  <div className="whylearnPic1" />
                  <div className="whylearnPicText">
                    <p className="text1">
                      特色一：家庭环境全英语交流
                    </p>
                    <p className="text2">
                      外教不仅是授课老师，更是孩子的生活伙伴
                    </p>
                  </div>
                </div>
              </Col>
              <Col span={3}></Col>
            </Row>
            <Row>
              <Col span={3}></Col>
              <Col span={18}>
                <div className="whylearnPicBox">
                  <div className="whylearnPic2" />
                  <div className="whylearnPicText">
                    <p className="text1">
                      特色二：全职外教上门授课
                    </p>
                    <p className="text2">
                    与其把时间浪费在交通上，不如稳坐家中学习
                    </p>
                  </div>
                </div>
              </Col>
              <Col span={3}></Col>
            </Row>
            <Row>
              <Col span={3}></Col>
              <Col span={18}>
                <div className="whylearnPicBox">
                  <div className="whylearnPic3" />
                  <div className="whylearnPicText">
                    <p className="text1">
                      特色三：社区熟人共享拼班
                    </p>
                    <p className="text2">
                      性价比高，比传统培训机构实惠多多
                    </p>
                  </div>
                </div>
              </Col>
              <Col span={3}></Col>
            </Row>
            <Row>
              <Col span={3}></Col>
              <Col span={18}>
                <div className="whylearnPicBox">
                  <div className="whylearnPic4" />
                  <div className="whylearnPicText">
                    <p className="text1">
                      特色四：精准匹配教材
                    </p>
                    <p className="text4">
                      根据您的需求及兴趣智能匹配教材，量身定制，依据12个等级细分学习水平，精准提升
                    </p>
                  </div>
                </div>
              </Col>
              <Col span={3}></Col>
            </Row>
          </div>
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  carouselPic1: state.getIn(['home', 'carouselPic1']),
  carouselPic2: state.getIn(['home', 'carouselPic2']),
  carouselPic3: state.getIn(['home', 'carouselPic3']),
  scrollWidth: state.getIn(['home', 'scrollWidth']),
});

const mapDispatchToProps = (dispatch) => {
  return {
    handleChangeScrollWidth(value) {
      dispatch(actionCreators.changeScrollWidth(value));
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);