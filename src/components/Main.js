require('normalize.css/normalize.css');
require('styles/App.css');

import Nav from './Nav';
import React from 'react';

// let yeomanImage = require('../images/yeoman.png');

class Main extends React.Component {

    render() {
        return (
          <div>
            <Nav/>
            {this.props.children}
          </div>
        );
    }
}

export default Main;
