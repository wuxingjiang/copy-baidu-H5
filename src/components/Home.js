import React from 'react';

// 头像
const headerImg = require('../images/headerImg.jpg');

// 详情说明
class Profile extends React.Component {
  render() {
    return(
      <div className="container-fluid">
        <img className="img-circle img-responsive center-block" src={headerImg} />
        <p className="text-center">吴星江</p>
        <p className="text-center">web前端工程师/疯狂的幻想</p>
        <p className="text-center">我是一名90后，即使现实把我撕扯的支离破碎，还是执着的追逐这属于我的梦想，即使每天都是一小步，总有一天会通向远方。趁我年轻的时候奋斗在前端的道路上。当我老了可以在家门口开个书店，消磨时光！</p>
      </div>
    );
  }
}


// 个人信息Img
const SelfIcon = require('../images/Self-introduction.svg')

class Card extends React.Component {
  render() {
    return(
      <div>
        <img alt="个人信息ICON" src={SelfIcon} />
      </div>
    );
  }
}

class CardPointer extends React.Component {
  render() {
    return(
      <div>
        <Card/>
        <Card/>
      </div>
    );
  }
}


class Home extends React.Component {
  render() {
    return(
      <div>
        <Profile/>
        <CardPointer/>
      </div>
    );
  }
}


Home.defaultProps = {
};

export default Home;
