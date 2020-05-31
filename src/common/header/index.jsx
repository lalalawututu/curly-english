import React, { PureComponent } from 'react';
import { Row, Col } from 'antd';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import en_US from '../../locale/en_US';
import zh_CN from '../../locale/zh_CN';
import './index.less';
import { actionCreatorsHeader } from './store';

class Header extends PureComponent{
  constructor(props) {
    super(props);
    this.state = {
      left: 0
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
    this.props.chooseLanguage(zh_CN);
  }
  render(){
    const {
      chooseLanguage,
      headPicture,
      handleToggleLanguage, 
      toggleLanguage, 
      handleToggleChat,
      handleToggleReferral,
      toggleBBT,
      toggleChat,
      handlePicture,
      toggleTutorial,
      handleToggleTutorial,
      handleToggleBBT,
      toggleReferal,
      toggleHow,
      handleToggleHow
    } = this.props;
    return (
      <div className="header">
        <div className="headerBox" style={{left: this.state.left}}>
          <Row>
            <Col span={1} />
            <Col span={2}>
              <Link to="/">
                <img className={this.state.headPictureC ? "doudizhuLogo" : "doudizhuLogoEn"} src={headPicture} alt="" />
              </Link>
            </Col>
            <Col span={1}></Col>
            <Col span={3} onClick={handleToggleHow}>
              <div className={toggleHow ? "headerName" : "headerNameActive"}>
                <FormattedMessage
                  id='HowToPlay'
                  defaultMessage="HOW TO PLAY"
                />
              </div>
            </Col>
            <Col span={3} onClick={handleToggleReferral}>
              <div className={toggleReferal ? "headerName" : "headerNameActive"}>
                <FormattedMessage
                  id='referral'
                  defaultMessage="REFERRAL"
                />
              </div>
            </Col>
            <Col span={3} onClick={handleToggleBBT}>
              <div className={toggleBBT ? "headerName" : "headerNameActive"}>
                <FormattedMessage
                  id='BBTDividend'
                  defaultMessage="BBT Dividend"
                />
              </div>
            </Col>
            <Col span={3} onClick={handleToggleTutorial}>
              <div className={toggleTutorial ? "toggleTutorial" : "toggleTutorialActive"}>
                <FormattedMessage
                  id='TutorialText'
                  defaultMessage="English"
                  className="language"
                />
                <div className="arrow"></div>
                <ul className="languageList">
                  <li>
                    <FormattedMessage
                      id='DownloadText2'
                      defaultMessage="BBT Dividend"
                    />
                  </li>
                  <li>
                    <FormattedMessage
                      id='TutorialText'
                      defaultMessage="BBT Dividend"
                    />
                  </li>
                  <li>
                    <FormattedMessage
                      id='SaveGas'
                      defaultMessage="BBT Dividend"
                    />
                  </li>
                </ul>
              </div>
            </Col>
            <Col span={3} />
            <Col span={2} onClick={handleToggleChat}>
              <div className={toggleChat ? "toggleChat" : "toggleChatActive"}>
                <FormattedMessage
                  id='chat'
                  defaultMessage="English"
                  className="language"
                />
                <div className="arrow"></div>
                <ul className="languageList">
                  <li>
                    <div className="discordImg"></div>
                    <span>
                      Discord
                    </span>
                  </li>
                  <li>
                    <div className="twitterImg"></div>
                    <span>
                      Twitter
                    </span>
                  </li>
                  <li>
                    <div className="telegramImg"></div>
                    Telegram
                  </li>
                  <li>
                    <div className="QQImg"></div>
                    QQ
                  </li>
                  <li>
                    <div className="weChatImg"></div>
                    WeChat
                  </li>
                  <li>
                    <div className="weiboImg"></div>
                    Weibo
                  </li>
                </ul>
              </div>
            </Col>
            <Col span={2} onClick={handleToggleLanguage}>
              <div className={toggleLanguage ? "toggleLanguage" : "toggleLanguageActive"}>
                <FormattedMessage
                  id='language'
                  defaultMessage="English"
                  className="language"
                />
                <div className="arrow"></div>
                <ul className="languageList">
                  <li onClick={() => { chooseLanguage(zh_CN); handlePicture('zh_CN');}}>简体中文</li>
                  <li onClick={() => { chooseLanguage(en_US); handlePicture('en_US');}}>English</li>
                </ul>
              </div>
            </Col>
            <Col span={1} />
          </Row>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  toggleReferal: state.getIn(['header', 'toggleReferal']),
  toggleHow: state.getIn(['header', 'toggleHow']),
  toggleBBT: state.getIn(['header', 'toggleBBT']),
  toggleTutorial: state.getIn(['header', 'toggleTutorial']),
  toggleLanguage: state.getIn(['header', 'toggleLanguage']),
  toggleChat: state.getIn(['header', 'toggleChat']),
  headPicture: state.getIn(['header', 'headPicture']),
  language: state.getIn(['header', 'language']),
});

const mapDispatchToProps = (dispatch) => {
  return {
    handleToggleHow() {
      dispatch(actionCreatorsHeader.toggleHow());
    },
    handleToggleReferral() {
      dispatch(actionCreatorsHeader.toggleReferral());
    },
    handleToggleBBT() {
      dispatch(actionCreatorsHeader.handleToggleBBT());
    },
    handleToggleTutorial() {
      dispatch(actionCreatorsHeader.toggleTutorial());
    },
    handleToggleLanguage() {
      dispatch(actionCreatorsHeader.toggleLanguage());
    },
    handleToggleChat() {
      dispatch(actionCreatorsHeader.toggleChat());
    },
    handlePicture(language) {
      dispatch(actionCreatorsHeader.toggleLogo(language));
    },
    chooseLanguage(language) {
      dispatch(actionCreatorsHeader.getLanguageInfo(language));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);