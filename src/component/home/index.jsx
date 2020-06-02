import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Carousel } from 'antd';
import './index.less';

class Home extends PureComponent{

  render(){
    return (
      <div className="homeBox">
        <div className="kong"> 123  </div>
        <Carousel autoplay autoplaySpeed={5000}>
          <div>
            <div className="first">
            </div>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
        </Carousel>
      </div>
    )
  }
}

export default connect()(Home);